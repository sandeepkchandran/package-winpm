# Read package version actions

Read your version in `adobe.json`

## Example workflow

`adobe.json`
```json

{
  "name": "your-package",
  "version": "1.0.0",
}
```

`.github/workflow/test.yml`
```yml
name: Get version from adobe.json

on: push

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Read adobe.json
        uses: tyankatsu0105/read-package-version-actions@v1
        id: package-version

      - name: Show version number
        run: echo "Version is ${{ steps.package-version.outputs.version }}"
        # Version is 1.0.0
```

## Inputs

### path

Path of `adobe.json`, `./` by default.

`path/to/adobe.json`
```json

{
  "name": "your-package",
  "version": "0.5.0",
}
```

```yml
name: Get version from adobe.json

on: push

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Read adobe.json
        uses: tyankatsu0105/read-package-version-actions@v1
        with: 
          path: "./path/to/adobe.json"
        id: package-version

      - name: Show version number
        run: echo "Version is ${{ steps.package-version.outputs.version }}"
        # Version is 0.5.0
```

# License

MIT