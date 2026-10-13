# String Performance & Memory Optimization

## Comparison Summary
| Feature | String | StringBuffer | StringBuilder |
| :--- | :--- | :--- | :--- |
| Mutability | Immutable | Mutable | Mutable |
| Thread Safety | Thread-safe | Thread-safe (sync) | Not thread-safe |
| Storage | String Pool / Heap | Heap | Heap |
| Performance | High creation cost | Moderate | Fastest for single thread |
