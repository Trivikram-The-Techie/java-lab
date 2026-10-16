# Custom Exceptions & Modern Resource Handling

## Custom Exception Example
```java
public class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}
```

## Try-with-Resources
Automatically closes resources implementing AutoCloseable without manual finally block.
