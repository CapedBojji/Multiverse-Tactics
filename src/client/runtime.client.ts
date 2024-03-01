import Zircon, { ZirconClient } from "@rbxts/zircon";
import { Flamework, Modding } from "@flamework/core";
import Log, { Logger } from "@rbxts/log";

// Set up the logger
print("Setting up Logger...");
Log.SetLogger(
	Logger.configure()
		.WriteTo(Zircon.Log.Console()) // WriteTo takes a sink and writes to it
		.Create(), // Creates the logger from the configuration
);
print("Logger set up.");

// Register log dependencies
print("Registering Logger dependency...");
Modding.registerDependency<Logger>((ctor) => {
	return Log.ForContext(ctor);
});
print("Registered Logger dependency.");

// Set up  Zircon
print("Setting up Zircon Client...");
ZirconClient.Init();
print("Zircon Client set up.");

// Set up Flamework
print("Setting up Flamework...");
Flamework.addPaths("src/client/components");
Flamework.addPaths("src/client/controllers");
Flamework.addPaths("src/shared/components");
Flamework.addPaths("src/client/state");
Flamework.ignite();
print("Flamework set up.");
