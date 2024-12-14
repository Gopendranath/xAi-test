# xAi-test

This is a test project for xAi api.

## Description

This project is used to test the xAi API.

## Usage

To use this project, simply run the following command:

```bash
node index.js
```

1. **create a .env**:
   - create a .env file in the root directory.
   - API_KEY=YOUR_API_KEY

2. **get api**:
   - get an api key form xAI api webside.

3. **create select model**:
   - grok-vision-beta will take image and text both
   - grok-beta will take text

| **Model Name**         | **Input**  | **Output**   | **Context Size** | **RPS** | **RPM** | **RPH** | **RPD** | **Cost per 1K Tokens** | **Cost per Image** |
|-------------------------|------------|--------------|------------------|---------|---------|---------|---------|------------------------|---------------------|
| **grok-beta**           | TEXT       | TEXT         | 131072           | 1       | 60      | 1200    | -       | $5.00                 | -                   |
| **grok-vision-beta**    | TEXT       | IMAGE/TEXT   | 8192             | 1       | 3       | 60      | -       | $5.00 (Text)          | $10.00/$15.00       |
| **grok-2-vision-1212**  | TEXT       | IMAGE/TEXT   | 32768            | 1       | 3       | 60      | -       | $2.00 (Text)          | $2.00/$10.00        |
| **grok-2-1212**         | TEXT       | TEXT         | 131072           | 1       | 60      | 1200    | -       | $2.00                 | -                   |

## API Documentation

* [xAI API Documentation](https://docs.x.ai/api#introduction)

## Contributing

Contributions are welcome! Please submit a pull request with your changes.