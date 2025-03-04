# `dataGoogleFirebaseAndroidApp` Submodule <a name="`dataGoogleFirebaseAndroidApp` Submodule" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirebaseAndroidApp <a name="DataGoogleFirebaseAndroidApp" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_firebase_android_app google_firebase_android_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidapp"

datagooglefirebaseandroidapp.NewDataGoogleFirebaseAndroidApp(scope Construct, id *string, config DataGoogleFirebaseAndroidAppConfig) DataGoogleFirebaseAndroidApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig">DataGoogleFirebaseAndroidAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig">DataGoogleFirebaseAndroidAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFirebaseAndroidApp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidapp"

datagooglefirebaseandroidapp.DataGoogleFirebaseAndroidApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidapp"

datagooglefirebaseandroidapp.DataGoogleFirebaseAndroidApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidapp"

datagooglefirebaseandroidapp.DataGoogleFirebaseAndroidApp_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidapp"

datagooglefirebaseandroidapp.DataGoogleFirebaseAndroidApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleFirebaseAndroidApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleFirebaseAndroidApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleFirebaseAndroidApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_firebase_android_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFirebaseAndroidApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.apiKeyId">ApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.packageName">PackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.sha1Hashes">Sha1Hashes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.sha256Hashes">Sha256Hashes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.apiKeyId"></a>

```go
func ApiKeyId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.packageName"></a>

```go
func PackageName() *string
```

- *Type:* *string

---

##### `Sha1Hashes`<sup>Required</sup> <a name="Sha1Hashes" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.sha1Hashes"></a>

```go
func Sha1Hashes() *[]*string
```

- *Type:* *[]*string

---

##### `Sha256Hashes`<sup>Required</sup> <a name="Sha256Hashes" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.sha256Hashes"></a>

```go
func Sha256Hashes() *[]*string
```

- *Type:* *[]*string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirebaseAndroidAppConfig <a name="DataGoogleFirebaseAndroidAppConfig" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagooglefirebaseandroidapp"

&datagooglefirebaseandroidapp.DataGoogleFirebaseAndroidAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.appId">AppId</a></code> | <code>*string</code> | The globally unique, Firebase-assigned identifier of the AndroidApp. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_firebase_android_app#id DataGoogleFirebaseAndroidApp#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_firebase_android_app#project DataGoogleFirebaseAndroidApp#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The globally unique, Firebase-assigned identifier of the AndroidApp.

This identifier should be treated as an opaque token, as the data format is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_firebase_android_app#app_id DataGoogleFirebaseAndroidApp#app_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_firebase_android_app#id DataGoogleFirebaseAndroidApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidApp.DataGoogleFirebaseAndroidAppConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_firebase_android_app#project DataGoogleFirebaseAndroidApp#project}.

---



