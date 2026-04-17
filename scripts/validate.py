#!/usr/bin/env python3
"""
YAML Data Validation Script
Validates YAML files against JSON Schema definitions.
"""

import argparse
import json
import sys
import yaml
from pathlib import Path
from jsonschema import validate, ValidationError


def load_schema(schema_path: str) -> dict:
    """Load JSON schema from file."""
    with open(schema_path, 'r') as f:
        return json.load(f)


def load_yaml_file(yaml_path: str) -> dict:
    """Load YAML file and return data."""
    with open(yaml_path, 'r') as f:
        return yaml.safe_load(f)


def validate_file(schema: dict, data: dict, file_path: str) -> list:
    """Validate data against schema, return list of errors."""
    errors = []
    try:
        validate(instance=data, schema=schema)
    except ValidationError as e:
        errors.append(f"{file_path}: {e.message}")
    return errors


def validate_tools(schema_path: str, data_glob: str) -> list:
    """Validate all tool definition files."""
    schema = load_schema(schema_path)
    errors = []
    
    # Support glob patterns
    import glob
    for file_path in glob.glob(data_glob):
        if Path(file_path).name.startswith('_'):
            continue
        try:
            data = load_yaml_file(file_path)
            if data:
                errors.extend(validate_file(schema, data, file_path))
        except yaml.YAMLError as e:
            errors.append(f"{file_path}: YAML parse error - {e}")
        except Exception as e:
            errors.append(f"{file_path}: Error - {e}")
    
    return errors


def validate_single_file(schema_path: str, data_path: str) -> list:
    """Validate a single YAML file."""
    schema = load_schema(schema_path)
    errors = []
    
    try:
        data = load_yaml_file(data_path)
        if data:
            errors.extend(validate_file(schema, data, data_path))
    except yaml.YAMLError as e:
        errors.append(f"{data_path}: YAML parse error - {e}")
    except Exception as e:
        errors.append(f"{data_path}: Error - {e}")
    
    return errors


def main():
    parser = argparse.ArgumentParser(description='Validate YAML data against JSON Schema')
    parser.add_argument('--schema', required=True, help='Path to JSON schema file')
    parser.add_argument('--data', required=True, help='Path to YAML data file or glob pattern')
    
    args = parser.parse_args()
    
    # Check if data path is a glob pattern
    if '*' in args.data:
        errors = validate_tools(args.schema, args.data)
    else:
        errors = validate_single_file(args.schema, args.data)
    
    if errors:
        print("❌ Validation failed:")
        for error in errors:
            print(f"  - {error}")
        sys.exit(1)
    else:
        print("✅ All files validated successfully!")
        sys.exit(0)


if __name__ == '__main__':
    main()
