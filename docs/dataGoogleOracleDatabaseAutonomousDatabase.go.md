# `dataGoogleOracleDatabaseAutonomousDatabase` Submodule <a name="`dataGoogleOracleDatabaseAutonomousDatabase` Submodule" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseAutonomousDatabase <a name="DataGoogleOracleDatabaseAutonomousDatabase" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/data-sources/google_oracle_database_autonomous_database google_oracle_database_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabase(scope Construct, id *string, config DataGoogleOracleDatabaseAutonomousDatabaseConfig) DataGoogleOracleDatabaseAutonomousDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig">DataGoogleOracleDatabaseAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig">DataGoogleOracleDatabaseAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleOracleDatabaseAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleOracleDatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/data-sources/google_oracle_database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.properties"></a>

```go
func Properties() DataGoogleOracleDatabaseAutonomousDatabasePropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```go
func AutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseAutonomousDatabaseConfig <a name="DataGoogleOracleDatabaseAutonomousDatabaseConfig" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousDatabaseId: *string,
	Location: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | The ID of the Autonomous Database to create. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/data-sources/google_oracle_database_autonomous_database#id DataGoogleOracleDatabaseAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/data-sources/google_oracle_database_autonomous_database#project DataGoogleOracleDatabaseAutonomousDatabase#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```go
AutonomousDatabaseId *string
```

- *Type:* *string

The ID of the Autonomous Database to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/data-sources/google_oracle_database_autonomous_database#autonomous_database_id DataGoogleOracleDatabaseAutonomousDatabase#autonomous_database_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/data-sources/google_oracle_database_autonomous_database#location DataGoogleOracleDatabaseAutonomousDatabase#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/data-sources/google_oracle_database_autonomous_database#id DataGoogleOracleDatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/data-sources/google_oracle_database_autonomous_database#project DataGoogleOracleDatabaseAutonomousDatabase#project}.

---

### DataGoogleOracleDatabaseAutonomousDatabaseProperties <a name="DataGoogleOracleDatabaseAutonomousDatabaseProperties" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabaseProperties {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime {

}
```


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

&datagoogleoracledatabaseautonomousdatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion">ApexVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion">OrdsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails">DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApexVersion`<sup>Required</sup> <a name="ApexVersion" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion"></a>

```go
func ApexVersion() *string
```

- *Type:* *string

---

##### `OrdsVersion`<sup>Required</sup> <a name="OrdsVersion" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion"></a>

```go
func OrdsVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails">DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high">High</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low">Low</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high"></a>

```go
func High() *string
```

- *Type:* *string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low"></a>

```go
func Low() *string
```

- *Type:* *string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium"></a>

```go
func Medium() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated">Dedicated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high">High</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low">Low</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles">Profiles</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```go
func AllConnectionStrings() DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a>

---

##### `Dedicated`<sup>Required</sup> <a name="Dedicated" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated"></a>

```go
func Dedicated() *string
```

- *Type:* *string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high"></a>

```go
func High() *string
```

- *Type:* *string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low"></a>

```go
func Low() *string
```

- *Type:* *string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium"></a>

```go
func Medium() *string
```

- *Type:* *string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles"></a>

```go
func Profiles() DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup">ConsumerGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat">HostFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional">IsRegional</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode">SessionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat">SyntaxFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication">TlsAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```go
func ConsumerGroup() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HostFormat`<sup>Required</sup> <a name="HostFormat" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```go
func HostFormat() *string
```

- *Type:* *string

---

##### `IsRegional`<sup>Required</sup> <a name="IsRegional" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```go
func IsRegional() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```go
func SessionMode() *string
```

- *Type:* *string

---

##### `SyntaxFormat`<sup>Required</sup> <a name="SyntaxFormat" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```go
func SyntaxFormat() *string
```

- *Type:* *string

---

##### `TlsAuthentication`<sup>Required</sup> <a name="TlsAuthentication" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```go
func TlsAuthentication() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri">ApexUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri">DatabaseTransformsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri">GraphStudioUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri">MachineLearningNotebookUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri">MachineLearningUserManagementUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri">MongoDbUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri">OrdsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri">SqlDevWebUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApexUri`<sup>Required</sup> <a name="ApexUri" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri"></a>

```go
func ApexUri() *string
```

- *Type:* *string

---

##### `DatabaseTransformsUri`<sup>Required</sup> <a name="DatabaseTransformsUri" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri"></a>

```go
func DatabaseTransformsUri() *string
```

- *Type:* *string

---

##### `GraphStudioUri`<sup>Required</sup> <a name="GraphStudioUri" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri"></a>

```go
func GraphStudioUri() *string
```

- *Type:* *string

---

##### `MachineLearningNotebookUri`<sup>Required</sup> <a name="MachineLearningNotebookUri" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri"></a>

```go
func MachineLearningNotebookUri() *string
```

- *Type:* *string

---

##### `MachineLearningUserManagementUri`<sup>Required</sup> <a name="MachineLearningUserManagementUri" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri"></a>

```go
func MachineLearningUserManagementUri() *string
```

- *Type:* *string

---

##### `MongoDbUri`<sup>Required</sup> <a name="MongoDbUri" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri"></a>

```go
func MongoDbUri() *string
```

- *Type:* *string

---

##### `OrdsUri`<sup>Required</sup> <a name="OrdsUri" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri"></a>

```go
func OrdsUri() *string
```

- *Type:* *string

---

##### `SqlDevWebUri`<sup>Required</sup> <a name="SqlDevWebUri" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri"></a>

```go
func SqlDevWebUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime">DataGuardRoleChangedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime">DisasterRecoveryRoleChangedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration">LagTimeDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataGuardRoleChangedTime`<sup>Required</sup> <a name="DataGuardRoleChangedTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime"></a>

```go
func DataGuardRoleChangedTime() *string
```

- *Type:* *string

---

##### `DisasterRecoveryRoleChangedTime`<sup>Required</sup> <a name="DisasterRecoveryRoleChangedTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime"></a>

```go
func DisasterRecoveryRoleChangedTime() *string
```

- *Type:* *string

---

##### `LagTimeDuration`<sup>Required</sup> <a name="LagTimeDuration" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration"></a>

```go
func LagTimeDuration() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb">ActualUsedDataStorageSizeTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb">AllocatedStorageSizeTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails">ApexDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed">ArePrimaryAllowlistedIpsUsed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays">BackupRetentionPeriodDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls">ConnectionUrls</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState">DatabaseManagementState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState">DataSafeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb">DataStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition">DbEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration">FailedDataRecoveryDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled">IsStorageAutoScalingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType">LocalDisasterRecoveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb">LocalStandbyDb</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime">MaintenanceBeginTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime">MaintenanceEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType">MaintenanceScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs">MemoryPerOracleComputeUnitGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs">MemoryTableGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet">NCharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime">NextLongTermBackupTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState">OperationsInsightsState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds">PeerDbIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel">PermissionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode">RefreshableMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState">RefreshableState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails">ScheduledOperationDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions">SupportedCloneRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs">TotalAutoBackupStorageSizeGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs">UsedDataStorageSizeTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseProperties">DataGoogleOracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActualUsedDataStorageSizeTb`<sup>Required</sup> <a name="ActualUsedDataStorageSizeTb" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb"></a>

```go
func ActualUsedDataStorageSizeTb() *f64
```

- *Type:* *f64

---

##### `AllocatedStorageSizeTb`<sup>Required</sup> <a name="AllocatedStorageSizeTb" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb"></a>

```go
func AllocatedStorageSizeTb() *f64
```

- *Type:* *f64

---

##### `ApexDetails`<sup>Required</sup> <a name="ApexDetails" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails"></a>

```go
func ApexDetails() DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a>

---

##### `ArePrimaryAllowlistedIpsUsed`<sup>Required</sup> <a name="ArePrimaryAllowlistedIpsUsed" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed"></a>

```go
func ArePrimaryAllowlistedIpsUsed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId"></a>

```go
func AutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions"></a>

```go
func AvailableUpgradeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `BackupRetentionPeriodDays`<sup>Required</sup> <a name="BackupRetentionPeriodDays" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays"></a>

```go
func BackupRetentionPeriodDays() *f64
```

- *Type:* *f64

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings"></a>

```go
func ConnectionStrings() DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a>

---

##### `ConnectionUrls`<sup>Required</sup> <a name="ConnectionUrls" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls"></a>

```go
func ConnectionUrls() DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a>

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts"></a>

```go
func CustomerContacts() DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a>

---

##### `DatabaseManagementState`<sup>Required</sup> <a name="DatabaseManagementState" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState"></a>

```go
func DatabaseManagementState() *string
```

- *Type:* *string

---

##### `DataSafeState`<sup>Required</sup> <a name="DataSafeState" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState"></a>

```go
func DataSafeState() *string
```

- *Type:* *string

---

##### `DataStorageSizeGb`<sup>Required</sup> <a name="DataStorageSizeGb" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb"></a>

```go
func DataStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb"></a>

```go
func DataStorageSizeTb() *f64
```

- *Type:* *f64

---

##### `DbEdition`<sup>Required</sup> <a name="DbEdition" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition"></a>

```go
func DbEdition() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload"></a>

```go
func DbWorkload() *string
```

- *Type:* *string

---

##### `FailedDataRecoveryDuration`<sup>Required</sup> <a name="FailedDataRecoveryDuration" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration"></a>

```go
func FailedDataRecoveryDuration() *string
```

- *Type:* *string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled"></a>

```go
func IsAutoScalingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled"></a>

```go
func IsLocalDataGuardEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsStorageAutoScalingEnabled`<sup>Required</sup> <a name="IsStorageAutoScalingEnabled" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled"></a>

```go
func IsStorageAutoScalingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```go
func LocalAdgAutoFailoverMaxDataLossLimit() *f64
```

- *Type:* *f64

---

##### `LocalDisasterRecoveryType`<sup>Required</sup> <a name="LocalDisasterRecoveryType" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType"></a>

```go
func LocalDisasterRecoveryType() *string
```

- *Type:* *string

---

##### `LocalStandbyDb`<sup>Required</sup> <a name="LocalStandbyDb" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb"></a>

```go
func LocalStandbyDb() DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a>

---

##### `MaintenanceBeginTime`<sup>Required</sup> <a name="MaintenanceBeginTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime"></a>

```go
func MaintenanceBeginTime() *string
```

- *Type:* *string

---

##### `MaintenanceEndTime`<sup>Required</sup> <a name="MaintenanceEndTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime"></a>

```go
func MaintenanceEndTime() *string
```

- *Type:* *string

---

##### `MaintenanceScheduleType`<sup>Required</sup> <a name="MaintenanceScheduleType" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType"></a>

```go
func MaintenanceScheduleType() *string
```

- *Type:* *string

---

##### `MemoryPerOracleComputeUnitGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitGbs" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs"></a>

```go
func MemoryPerOracleComputeUnitGbs() *f64
```

- *Type:* *f64

---

##### `MemoryTableGbs`<sup>Required</sup> <a name="MemoryTableGbs" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs"></a>

```go
func MemoryTableGbs() *f64
```

- *Type:* *f64

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired"></a>

```go
func MtlsConnectionRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NCharacterSet`<sup>Required</sup> <a name="NCharacterSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet"></a>

```go
func NCharacterSet() *string
```

- *Type:* *string

---

##### `NextLongTermBackupTime`<sup>Required</sup> <a name="NextLongTermBackupTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime"></a>

```go
func NextLongTermBackupTime() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `OperationsInsightsState`<sup>Required</sup> <a name="OperationsInsightsState" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState"></a>

```go
func OperationsInsightsState() *string
```

- *Type:* *string

---

##### `PeerDbIds`<sup>Required</sup> <a name="PeerDbIds" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds"></a>

```go
func PeerDbIds() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel"></a>

```go
func PermissionLevel() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint"></a>

```go
func PrivateEndpoint() *string
```

- *Type:* *string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel"></a>

```go
func PrivateEndpointLabel() *string
```

- *Type:* *string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode"></a>

```go
func RefreshableMode() *string
```

- *Type:* *string

---

##### `RefreshableState`<sup>Required</sup> <a name="RefreshableState" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState"></a>

```go
func RefreshableState() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `ScheduledOperationDetails`<sup>Required</sup> <a name="ScheduledOperationDetails" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails"></a>

```go
func ScheduledOperationDetails() DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a>

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl"></a>

```go
func SqlWebDeveloperUrl() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportedCloneRegions`<sup>Required</sup> <a name="SupportedCloneRegions" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions"></a>

```go
func SupportedCloneRegions() *[]*string
```

- *Type:* *[]*string

---

##### `TotalAutoBackupStorageSizeGbs`<sup>Required</sup> <a name="TotalAutoBackupStorageSizeGbs" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs"></a>

```go
func TotalAutoBackupStorageSizeGbs() *f64
```

- *Type:* *f64

---

##### `UsedDataStorageSizeTbs`<sup>Required</sup> <a name="UsedDataStorageSizeTbs" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs"></a>

```go
func UsedDataStorageSizeTbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabaseProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabaseProperties">DataGoogleOracleDatabaseAutonomousDatabaseProperties</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime">StopTime</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime"></a>

```go
func StartTime() DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a>

---

##### `StopTime`<sup>Required</sup> <a name="StopTime" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime"></a>

```go
func StopTime() DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a>

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference <a name="DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleoracledatabaseautonomousdatabase"

datagoogleoracledatabaseautonomousdatabase.NewDataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleOracleDatabaseAutonomousDatabase.DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">DataGoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a>

---



