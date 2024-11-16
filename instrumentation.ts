export async function register() {
    console.log("process.env.NEXT_RUNTIME", process.env.NEXT_RUNTIME);
    if (process.env.NEXT_RUNTIME === "nodejs") {
        await import("nextinspect/tracing");
    }
}
