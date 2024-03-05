interface ReplicatedStorage extends Instance {
	TS: Folder & {
		modules: Folder & {
			eventqueue: ModuleScript;
			repr: ModuleScript;
			["lemon-signal"]: ModuleScript;
		};
		slices: ModuleScript & {
			duels: ModuleScript & {
				["battle-state"]: ModuleScript;
			};
		};
		networking: ModuleScript & {
			["client-events"]: ModuleScript;
			["server-events"]: ModuleScript;
		};
		utilities: Folder & {
			["server-middlewares"]: ModuleScript;
			serializer: ModuleScript;
			listeners: ModuleScript;
			["client-middlewares"]: ModuleScript;
			tree: ModuleScript;
		};
		components: Folder;
		selectors: Folder;
	};
	Wally: Folder & {
		_Index: Folder & {
			["sleitnick_loader@2.0.0"]: Folder & {
				loader: ModuleScript & {
					wally: ModuleScript;
				};
			};
			["sleitnick_tree@1.1.0"]: Folder & {
				tree: ModuleScript & {
					wally: ModuleScript;
				};
			};
			["bubshayz_serializerutil@1.5.0"]: Folder & {
				serializerutil: ModuleScript & {
					serializers: Folder & {
						Region3: ModuleScript;
						ColorSequence: ModuleScript;
						PathWaypoint: ModuleScript;
						Vector3int16: ModuleScript;
						Vector3: ModuleScript;
						Vector2int16: ModuleScript;
						DateTime: ModuleScript;
						Vector2: ModuleScript;
						TweenInfo: ModuleScript;
						UDim2: ModuleScript;
						Enum: ModuleScript;
						UDim: ModuleScript;
						NumberRange: ModuleScript;
						FloatCurveKey: ModuleScript;
						PhysicalProperties: ModuleScript;
						NumberSequence: ModuleScript;
						Rect: ModuleScript;
						EnumItem: ModuleScript;
						NumberSequenceKeypoint: ModuleScript;
						CFrame: ModuleScript;
						Faces: ModuleScript;
						Font: ModuleScript;
						BrickColor: ModuleScript;
						Region3int16: ModuleScript;
						Color3: ModuleScript;
						Axes: ModuleScript;
						ColorSequenceKeypoint: ModuleScript;
						CatalogSearchParams: ModuleScript;
					};
					wally: ModuleScript;
					deserializers: Folder & {
						Region3: ModuleScript;
						ColorSequence: ModuleScript;
						PathWaypoint: ModuleScript;
						Vector3int16: ModuleScript;
						Vector3: ModuleScript;
						Vector2int16: ModuleScript;
						DateTime: ModuleScript;
						Vector2: ModuleScript;
						TweenInfo: ModuleScript;
						UDim2: ModuleScript;
						Enum: ModuleScript;
						UDim: ModuleScript;
						NumberRange: ModuleScript;
						FloatCurveKey: ModuleScript;
						PhysicalProperties: ModuleScript;
						NumberSequence: ModuleScript;
						Rect: ModuleScript;
						EnumItem: ModuleScript;
						NumberSequenceKeypoint: ModuleScript;
						CFrame: ModuleScript;
						Faces: ModuleScript;
						Font: ModuleScript;
						BrickColor: ModuleScript;
						Region3int16: ModuleScript;
						Color3: ModuleScript;
						Axes: ModuleScript;
						ColorSequenceKeypoint: ModuleScript;
						CatalogSearchParams: ModuleScript;
					};
				};
				Loader: ModuleScript;
			};
			["data-oriented-house_lemonsignal@1.9.0"]: Folder & {
				lemonsignal: ModuleScript & {
					wally: ModuleScript;
				};
			};
		};
		tree: ModuleScript;
		serializerutil: ModuleScript;
		lemonsignal: ModuleScript;
	};
	Maps: Folder & {
		["Map-Default"]: Model & {
			["Row-4"]: Folder & {
				["Cell-1"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-2"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-3"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-4"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-5"]: Model & {
					Base: Part;
					Model: Part;
				};
			};
			["Row-2"]: Folder & {
				["Cell-1"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-2"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-3"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-4"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-5"]: Model & {
					Base: Part;
					Model: Part;
				};
			};
			["Row-8"]: Folder & {
				["Cell-1"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-2"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-3"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-4"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-5"]: Model & {
					Base: Part;
					Model: Part;
				};
			};
			["Row-7"]: Folder & {
				["Cell-1"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-2"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-3"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-4"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-5"]: Model & {
					Base: Part;
					Model: Part;
				};
			};
			["Row-1"]: Folder & {
				["Cell-1"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-2"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-3"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-4"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-5"]: Model & {
					Base: Part;
					Model: Part;
				};
			};
			["Row-6"]: Folder & {
				["Cell-1"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-2"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-3"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-4"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-5"]: Model & {
					Base: Part;
					Model: Part;
				};
			};
			["Row-5"]: Folder & {
				["Cell-1"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-2"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-3"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-4"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-5"]: Model & {
					Base: Part;
					Model: Part;
				};
			};
			Base: Part;
			["Row-3"]: Folder & {
				["Cell-1"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-2"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-3"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-4"]: Model & {
					Base: Part;
					Model: Part;
				};
				["Cell-5"]: Model & {
					Base: Part;
					Model: Part;
				};
			};
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@flamework"]: Folder & {
				core: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							t: Folder & {
								lib: Folder & {
									ts: ModuleScript;
								};
							};
						};
					};
					out: ModuleScript & {
						flamework: ModuleScript;
						utility: ModuleScript;
						reflect: ModuleScript;
						modding: ModuleScript;
						metadata: ModuleScript;
					};
				};
				components: Folder & {
					out: ModuleScript & {
						components: ModuleScript;
						baseComponent: ModuleScript;
						componentTracker: ModuleScript;
						utility: ModuleScript;
					};
				};
				networking: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							t: Folder & {
								lib: Folder & {
									ts: ModuleScript;
								};
							};
						};
					};
					out: ModuleScript & {
						["function"]: Folder & {
							createFunctionSender: ModuleScript;
							createFunctionReceiver: ModuleScript;
							errors: ModuleScript;
						};
						events: Folder & {
							createServerMethod: ModuleScript;
							createNetworkingEvent: ModuleScript;
							createGenericHandler: ModuleScript;
							createClientMethod: ModuleScript;
						};
						functions: Folder & {
							createServerMethod: ModuleScript;
							createNetworkingFunction: ModuleScript;
							createGenericHandler: ModuleScript;
							createClientMethod: ModuleScript;
						};
						util: Folder & {
							createSignalContainer: ModuleScript;
							getNamespaceConfig: ModuleScript;
							timeoutPromise: ModuleScript;
						};
						event: Folder & {
							createEvent: ModuleScript;
							createRemoteInstance: ModuleScript;
						};
						middleware: Folder & {
							createMiddlewareProcessor: ModuleScript;
							createGuardMiddleware: ModuleScript;
							skip: ModuleScript;
						};
					};
				};
			};
			["@rbxts"]: Folder & {
				["string-utils"]: ModuleScript;
				roact: Folder & {
					src: ModuleScript & {
						createSpy: ModuleScript;
						createSignal: ModuleScript;
						oneChild: ModuleScript;
						Component: ModuleScript;
						createElement: ModuleScript;
						createReconciler: ModuleScript;
						GlobalConfig: ModuleScript;
						strict: ModuleScript;
						createRef: ModuleScript;
						Type: ModuleScript;
						Portal: ModuleScript;
						Symbol: ModuleScript;
						PropMarkers: Folder & {
							Ref: ModuleScript;
							Change: ModuleScript;
							Children: ModuleScript;
							Event: ModuleScript;
						};
						ComponentLifecyclePhase: ModuleScript;
						Config: ModuleScript;
						assign: ModuleScript;
						assertDeepEqual: ModuleScript;
						getDefaultInstanceProperty: ModuleScript;
						Binding: ModuleScript;
						NoopRenderer: ModuleScript;
						forwardRef: ModuleScript;
						internalAssert: ModuleScript;
						createReconcilerCompat: ModuleScript;
						createFragment: ModuleScript;
						RobloxRenderer: ModuleScript;
						PureComponent: ModuleScript;
						invalidSetStateMessages: ModuleScript;
						ElementKind: ModuleScript;
						createContext: ModuleScript;
						Logging: ModuleScript;
						ElementUtils: ModuleScript;
						SingleEventManager: ModuleScript;
						None: ModuleScript;
					};
				};
				services: ModuleScript;
				["roact-hooks"]: Folder & {
					src: ModuleScript & {
						createUseState: ModuleScript;
						createUseCallback: ModuleScript;
						createUseContext: ModuleScript;
						createUseValue: ModuleScript;
						createUseReducer: ModuleScript;
						createUseMemo: ModuleScript;
						createUseEffect: ModuleScript;
						createUseBinding: ModuleScript;
					};
				};
				reflex: Folder & {
					src: ModuleScript & {
						createProducer: ModuleScript;
						broadcast: ModuleScript & {
							createBroadcastReceiver: ModuleScript;
							createBroadcaster: ModuleScript;
							hydrate: ModuleScript;
						};
						Promise: ModuleScript;
						createSelector: ModuleScript;
						utils: Folder & {
							shallowEqual: ModuleScript;
							testSelector: ModuleScript;
							createSelectArrayDiffs: ModuleScript;
							setInterval: ModuleScript;
						};
						combineProducers: ModuleScript;
						middleware: Folder & {
							loggerMiddleware: ModuleScript;
						};
						applyMiddleware: ModuleScript;
						types: ModuleScript;
					};
				};
				zirconium: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							["rust-classes"]: Folder & {
								out: ModuleScript & {
									classes: Folder & {
										Vec: ModuleScript;
										Option: ModuleScript;
										OptionMut: ModuleScript;
										Result: ModuleScript;
										Iterator: ModuleScript;
									};
									util: Folder & {
										lazyLoad: ModuleScript;
										imports: ModuleScript;
										Range: ModuleScript;
										Unit: ModuleScript;
									};
								};
							};
						};
					};
					out: ModuleScript & {
						Runtime: Folder & {
							Runtime: ModuleScript;
							ScriptContext: ModuleScript;
							PlayerScriptContext: ModuleScript;
							Script: ModuleScript;
						};
						Functions: Folder & {
							BuiltInFunctions: ModuleScript;
						};
						Util: ModuleScript & {
							Symbol: ModuleScript;
						};
						Binder: ModuleScript;
						Data: Folder & {
							Userdata: ModuleScript;
							Range: ModuleScript;
							EnumItem: ModuleScript;
							Helpers: ModuleScript;
							Null: ModuleScript;
							UserFunction: ModuleScript;
							Stream: ModuleScript;
							Object: ModuleScript;
							LuauFunction: ModuleScript;
							Locals: ModuleScript;
							Enum: ModuleScript;
							Context: ModuleScript;
							Undefined: ModuleScript;
						};
						Ast: ModuleScript & {
							Syntax: Folder & {
								RichTextHighlighter: ModuleScript;
							};
							TextStream: ModuleScript;
							Lexer: ModuleScript;
							Parser: ModuleScript;
							Tokens: Folder & {
								Tokens: ModuleScript;
								Grammar: ModuleScript;
							};
							Validation: ModuleScript;
							Nodes: ModuleScript & {
								Guards: ModuleScript;
								Functions: ModuleScript;
								Enum: ModuleScript;
								Create: ModuleScript;
								NodeTypes: ModuleScript;
							};
							Definitions: Folder & {
								Definitions: ModuleScript;
							};
							ErrorStrings: ModuleScript;
							Utility: Folder & {
								PrettyPrintNodes: ModuleScript;
								NodeVisitor: ModuleScript;
							};
						};
					};
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
				rodux: Folder & {
					src: ModuleScript & {
						combineReducers: ModuleScript;
						NoYield: ModuleScript;
						createReducer: ModuleScript;
						loggerMiddleware: ModuleScript;
						makeActionCreator: ModuleScript;
						thunkMiddleware: ModuleScript;
						prettyPrint: ModuleScript;
						Store: ModuleScript;
						Signal: ModuleScript;
					};
				};
				zircon: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							t: Folder & {
								lib: Folder & {
									ts: ModuleScript;
								};
							};
							log: Folder & {
								out: ModuleScript & {
									Core: ModuleScript & {
										LogEventCallbackSink: ModuleScript;
										LogEventPropertyEnricher: ModuleScript;
										LogEventRobloxOutputSink: ModuleScript;
									};
									Configuration: ModuleScript;
									Logger: ModuleScript;
								};
							};
							["roact-rodux"]: Folder & {
								src: ModuleScript & {
									StoreContext: ModuleScript;
									StoreProvider: ModuleScript;
									Symbol: ModuleScript;
									shallowEqual: ModuleScript;
									join: ModuleScript;
									connect: ModuleScript;
								};
							};
							roact: Folder & {
								src: ModuleScript & {
									createSpy: ModuleScript;
									createSignal: ModuleScript;
									oneChild: ModuleScript;
									Component: ModuleScript;
									createElement: ModuleScript;
									createReconciler: ModuleScript;
									GlobalConfig: ModuleScript;
									strict: ModuleScript;
									createRef: ModuleScript;
									Type: ModuleScript;
									Portal: ModuleScript;
									Symbol: ModuleScript;
									PropMarkers: Folder & {
										Ref: ModuleScript;
										Change: ModuleScript;
										Children: ModuleScript;
										Event: ModuleScript;
									};
									ComponentLifecyclePhase: ModuleScript;
									Config: ModuleScript;
									assign: ModuleScript;
									assertDeepEqual: ModuleScript;
									getDefaultInstanceProperty: ModuleScript;
									Binding: ModuleScript;
									NoopRenderer: ModuleScript;
									forwardRef: ModuleScript;
									internalAssert: ModuleScript;
									createReconcilerCompat: ModuleScript;
									createFragment: ModuleScript;
									RobloxRenderer: ModuleScript;
									PureComponent: ModuleScript;
									invalidSetStateMessages: ModuleScript;
									ElementKind: ModuleScript;
									createContext: ModuleScript;
									Logging: ModuleScript;
									ElementUtils: ModuleScript;
									SingleEventManager: ModuleScript;
									None: ModuleScript;
								};
							};
						};
					};
					out: ModuleScript & {
						Log: ModuleScript;
						Shared: Folder & {
							Lazy: ModuleScript;
							MapUtils: ModuleScript;
							typeId: ModuleScript;
							tsImportShim: ModuleScript;
							NetPermissionMiddleware: ModuleScript;
							Remotes: ModuleScript;
							Debugging: ModuleScript;
							Collections: ModuleScript;
						};
						BuiltIn: Folder & {
							EnumPrint: ModuleScript;
							Print: ModuleScript;
						};
						Services: ModuleScript & {
							ClientRegistryService: ModuleScript;
							LogService: ModuleScript;
							RegistryService: ModuleScript;
							DispatchService: ModuleScript;
							ClientDispatchService: ModuleScript;
						};
						Client: ModuleScript & {
							Components: Folder & {
								SyntaxTextBox: ModuleScript;
								Window: ModuleScript;
								Titlebar: ModuleScript;
								Output: ModuleScript;
								MultiSelectDropdown: ModuleScript;
								Dropdown: ModuleScript;
								StructuredLogMessage: ModuleScript;
								SearchTextBox: ModuleScript;
								Padding: ModuleScript;
								OutputMessage: ModuleScript;
								Icon: ModuleScript;
								ScrollView: ModuleScript;
							};
							UIKit: Folder & {
								ThemeContext: ModuleScript;
							};
							Format: ModuleScript & {
								ZirconStructuredMessageTemplate: ModuleScript;
							};
							BuiltInConsole: Folder & {
								UI: Folder & {
									DockedConsole: ModuleScript;
									TopbarMenu: ModuleScript;
								};
								Store: ModuleScript & {
									_reducers: Folder & {
										ConsoleReducer: ModuleScript;
									};
								};
								DelayAsync: ModuleScript;
							};
							Context: Folder & {
								ZirconContext: ModuleScript;
							};
							Types: ModuleScript;
						};
						Class: Folder & {
							Validators: Folder & {
								ZirconFuzzyPlayersValidator: ModuleScript;
								ZirconFuzzyPlayerValidator: ModuleScript;
								OptionalValidator: ModuleScript;
							};
							ZirconTypeValidator: ModuleScript;
							StatefulZirconValidator: ModuleScript;
							ZirconEnumBuilder: ModuleScript;
							ZirconNamespaceBuilder: ModuleScript;
							ZirconContext: ModuleScript;
							TypeUtilities: ModuleScript;
							ZirconNamespace: ModuleScript;
							ZirconFunctionBuilder: ModuleScript;
							ZirconGroupBuilder: ModuleScript;
							ZirconFunction: ModuleScript;
							ZirconClientConfigurationBuilder: ModuleScript;
							ZirconConfigurationBuilder: ModuleScript;
							ZirconEnumItem: ModuleScript;
							ZirconEnum: ModuleScript;
						};
						Server: ModuleScript & {
							Class: Folder & {
								ZirconGroup: ModuleScript;
								ZirconFunction: ModuleScript;
							};
						};
					};
				};
				snapdragon: Folder & {
					src: ModuleScript & {
						objectAssign: ModuleScript;
						SnapdragonRef: ModuleScript;
						SnapdragonController: ModuleScript;
						Symbol: ModuleScript;
						t: ModuleScript;
						Maid: ModuleScript;
						Signal: ModuleScript;
					};
				};
				net: Folder & {
					out: ModuleScript & {
						definitions: ModuleScript & {
							ServerDefinitionBuilder: ModuleScript;
							NamespaceBuilder: ModuleScript;
							ClientDefinitionBuilder: ModuleScript;
							Types: ModuleScript;
						};
						messaging: Folder & {
							ExperienceBroadcastEvent: ModuleScript;
							MessagingService: ModuleScript;
						};
						client: ModuleScript & {
							ClientFunction: ModuleScript;
							ClientEvent: ModuleScript;
							ClientAsyncFunction: ModuleScript;
						};
						internal: ModuleScript & {
							validator: ModuleScript;
							tables: ModuleScript;
						};
						middleware: ModuleScript & {
							RateLimitMiddleware: ModuleScript & {
								throttle: ModuleScript;
							};
							LoggerMiddleware: ModuleScript;
							TypeCheckMiddleware: ModuleScript;
						};
						server: ModuleScript & {
							ServerEvent: ModuleScript;
							ServerAsyncFunction: ModuleScript;
							ServerFunction: ModuleScript;
							MiddlewareFunction: ModuleScript;
							NetServerScriptSignal: ModuleScript;
							CreateServerListener: ModuleScript;
							ServerMessagingEvent: ModuleScript;
							MiddlewareEvent: ModuleScript;
						};
					};
				};
				t: Folder & {
					lib: Folder & {
						ts: ModuleScript;
					};
				};
				maid: Folder & {
					Maid: ModuleScript;
				};
				log: Folder & {
					out: ModuleScript & {
						Core: ModuleScript & {
							LogEventCallbackSink: ModuleScript;
							LogEventPropertyEnricher: ModuleScript;
							LogEventRobloxOutputSink: ModuleScript;
						};
						Configuration: ModuleScript;
						Logger: ModuleScript;
					};
				};
				signal: ModuleScript;
				["compiler-types"]: Folder & {
					types: Folder;
				};
				["object-utils"]: ModuleScript;
				["rust-classes"]: Folder & {
					out: ModuleScript & {
						classes: Folder & {
							Vec: ModuleScript;
							HashMap: ModuleScript;
							Option: ModuleScript;
							OptionMut: ModuleScript;
							Iterator: ModuleScript;
							Result: ModuleScript;
						};
						util: Folder & {
							lazyLoad: ModuleScript;
							sizeHint: ModuleScript;
							imports: ModuleScript;
							Range: ModuleScript;
							Unit: ModuleScript;
						};
					};
				};
				["validate-tree"]: ModuleScript;
				["message-templates"]: Folder & {
					out: ModuleScript & {
						MessageTemplateRenderer: ModuleScript;
						PlainTextMessageTemplateRenderer: ModuleScript;
						RbxSerializer: ModuleScript;
						MessageTemplate: ModuleScript;
						MessageTemplateToken: ModuleScript;
						MessageTemplateParser: ModuleScript;
					};
				};
				flipper: Folder & {
					typings: Folder;
					src: ModuleScript & {
						isMotor: ModuleScript;
						Spring: ModuleScript;
						GroupMotor: ModuleScript;
						Signal: ModuleScript;
						SingleMotor: ModuleScript;
						Instant: ModuleScript;
						Linear: ModuleScript;
						BaseMotor: ModuleScript;
					};
				};
				["better-janitor"]: Folder & {
					src: ModuleScript & {
						["init.spec"]: ModuleScript;
					};
				};
			};
			["@capedbojji"]: Folder & {
				utils: Folder & {
					src: Folder & {
						Segment: ModuleScript;
						Point: ModuleScript;
						Guid: ModuleScript;
						["Rect.spec"]: ModuleScript;
						Grid: ModuleScript;
						Rect: ModuleScript;
						RandomSynced: ModuleScript;
						GeneralMath: ModuleScript;
						["Segment.spec"]: ModuleScript;
					};
				};
			};
		};
	};
}
