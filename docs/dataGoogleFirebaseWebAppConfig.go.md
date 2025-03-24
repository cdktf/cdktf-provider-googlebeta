# `dataGoogleFirebaseWebAppConfig` Submodule <a name="`dataGoogleFirebaseWebAppConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirebaseWebAppConfigA <a name="DataGoogleFirebaseWebAppConfigA" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_firebase_web_app_config google_firebase_web_app_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasewebappconfig"

datagooglefirebasewebappconfig.NewDataGoogleFirebaseWebAppConfigA(scope Construct, id *string, config DataGoogleFirebaseWebAppConfigAConfig) DataGoogleFirebaseWebAppConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig">DataGoogleFirebaseWebAppConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig">DataGoogleFirebaseWebAppConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFirebaseWebAppConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasewebappconfig"

datagooglefirebasewebappconfig.DataGoogleFirebaseWebAppConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasewebappconfig"

datagooglefirebasewebappconfig.DataGoogleFirebaseWebAppConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasewebappconfig"

datagooglefirebasewebappconfig.DataGoogleFirebaseWebAppConfigA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasewebappconfig"

datagooglefirebasewebappconfig.DataGoogleFirebaseWebAppConfigA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleFirebaseWebAppConfigA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleFirebaseWebAppConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleFirebaseWebAppConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_firebase_web_app_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFirebaseWebAppConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.authDomain">AuthDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.databaseUrl">DatabaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.locationId">LocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.measurementId">MeasurementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.messagingSenderId">MessagingSenderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.storageBucket">StorageBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.webAppIdInput">WebAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.webAppId">WebAppId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `AuthDomain`<sup>Required</sup> <a name="AuthDomain" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.authDomain"></a>

```go
func AuthDomain() *string
```

- *Type:* *string

---

##### `DatabaseUrl`<sup>Required</sup> <a name="DatabaseUrl" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.databaseUrl"></a>

```go
func DatabaseUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.locationId"></a>

```go
func LocationId() *string
```

- *Type:* *string

---

##### `MeasurementId`<sup>Required</sup> <a name="MeasurementId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.measurementId"></a>

```go
func MeasurementId() *string
```

- *Type:* *string

---

##### `MessagingSenderId`<sup>Required</sup> <a name="MessagingSenderId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.messagingSenderId"></a>

```go
func MessagingSenderId() *string
```

- *Type:* *string

---

##### `StorageBucket`<sup>Required</sup> <a name="StorageBucket" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.storageBucket"></a>

```go
func StorageBucket() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `WebAppIdInput`<sup>Optional</sup> <a name="WebAppIdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.webAppIdInput"></a>

```go
func WebAppIdInput() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WebAppId`<sup>Required</sup> <a name="WebAppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.webAppId"></a>

```go
func WebAppId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirebaseWebAppConfigAConfig <a name="DataGoogleFirebaseWebAppConfigAConfig" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebasewebappconfig"

&datagooglefirebasewebappconfig.DataGoogleFirebaseWebAppConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WebAppId: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.webAppId">WebAppId</a></code> | <code>*string</code> | The id of the Firebase web App. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.project">Project</a></code> | <code>*string</code> | The project id of the Firebase web App. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WebAppId`<sup>Required</sup> <a name="WebAppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.webAppId"></a>

```go
WebAppId *string
```

- *Type:* *string

The id of the Firebase web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_firebase_web_app_config#web_app_id DataGoogleFirebaseWebAppConfigA#web_app_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleFirebaseWebAppConfig.DataGoogleFirebaseWebAppConfigAConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project id of the Firebase web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_firebase_web_app_config#project DataGoogleFirebaseWebAppConfigA#project}

---



