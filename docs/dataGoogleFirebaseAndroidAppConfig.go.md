# `dataGoogleFirebaseAndroidAppConfig` Submodule <a name="`dataGoogleFirebaseAndroidAppConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirebaseAndroidAppConfigA <a name="DataGoogleFirebaseAndroidAppConfigA" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config google_firebase_android_app_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidappconfig"

datagooglefirebaseandroidappconfig.NewDataGoogleFirebaseAndroidAppConfigA(scope Construct, id *string, config DataGoogleFirebaseAndroidAppConfigAConfig) DataGoogleFirebaseAndroidAppConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig">DataGoogleFirebaseAndroidAppConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig">DataGoogleFirebaseAndroidAppConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFirebaseAndroidAppConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidappconfig"

datagooglefirebaseandroidappconfig.DataGoogleFirebaseAndroidAppConfigA_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidappconfig"

datagooglefirebaseandroidappconfig.DataGoogleFirebaseAndroidAppConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidappconfig"

datagooglefirebaseandroidappconfig.DataGoogleFirebaseAndroidAppConfigA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidappconfig"

datagooglefirebaseandroidappconfig.DataGoogleFirebaseAndroidAppConfigA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleFirebaseAndroidAppConfigA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleFirebaseAndroidAppConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleFirebaseAndroidAppConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFirebaseAndroidAppConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.configFileContents">ConfigFileContents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.configFilename">ConfigFilename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ConfigFileContents`<sup>Required</sup> <a name="ConfigFileContents" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.configFileContents"></a>

```go
func ConfigFileContents() *string
```

- *Type:* *string

---

##### `ConfigFilename`<sup>Required</sup> <a name="ConfigFilename" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.configFilename"></a>

```go
func ConfigFilename() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirebaseAndroidAppConfigAConfig <a name="DataGoogleFirebaseAndroidAppConfigAConfig" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidappconfig"

&datagooglefirebaseandroidappconfig.DataGoogleFirebaseAndroidAppConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.appId">AppId</a></code> | <code>*string</code> | The id of the Firebase Android App. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.project">Project</a></code> | <code>*string</code> | The project id of the Firebase Android App. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The id of the Firebase Android App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config#app_id DataGoogleFirebaseAndroidAppConfigA#app_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project id of the Firebase Android App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config#project DataGoogleFirebaseAndroidAppConfigA#project}

---



