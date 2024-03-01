import { Flamework, Modding } from "@flamework/core";
import { ZirconServer, ZirconConfigurationBuilder } from "@rbxts/zircon";
import Log, { Logger } from "@rbxts/log";
import Zircon from "@rbxts/zircon";

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

// Set up Zircon
print("Setting up Zircon Server...");
ZirconServer.Registry.Init(ZirconConfigurationBuilder.default().Build());
print("Zircon Server set up.");

print("Setting up Logger...");
Flamework.addPaths("src/server/components");
Flamework.addPaths("src/server/services");
Flamework.addPaths("src/shared/components");
Flamework.addPaths("src/server/state");
Flamework.ignite();
print("Flamework set up.");
