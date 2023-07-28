# `google_firestore_database`

Refer to the Terraform Registory for docs: [`google_firestore_database`](https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database).

# `googleFirestoreDatabase` Submodule <a name="`googleFirestoreDatabase` Submodule" id="@cdktf/provider-google-beta.googleFirestoreDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreDatabase <a name="GoogleFirestoreDatabase" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database google_firestore_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoredatabase"

googlefirestoredatabase.NewGoogleFirestoreDatabase(scope Construct, id *string, config GoogleFirestoreDatabaseConfig) GoogleFirestoreDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig">GoogleFirestoreDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig">GoogleFirestoreDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetAppEngineIntegrationMode">ResetAppEngineIntegrationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetConcurrencyMode">ResetConcurrencyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirestoreDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>

---

##### `ResetAppEngineIntegrationMode` <a name="ResetAppEngineIntegrationMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetAppEngineIntegrationMode"></a>

```go
func ResetAppEngineIntegrationMode()
```

##### `ResetConcurrencyMode` <a name="ResetConcurrencyMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetConcurrencyMode"></a>

```go
func ResetConcurrencyMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoredatabase"

googlefirestoredatabase.GoogleFirestoreDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoredatabase"

googlefirestoredatabase.GoogleFirestoreDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoredatabase"

googlefirestoredatabase.GoogleFirestoreDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference">GoogleFirestoreDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationModeInput">AppEngineIntegrationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyModeInput">ConcurrencyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationIdInput">LocationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationMode">AppEngineIntegrationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyMode">ConcurrencyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationId">LocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeouts"></a>

```go
func Timeouts() GoogleFirestoreDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference">GoogleFirestoreDatabaseTimeoutsOutputReference</a>

---

##### `AppEngineIntegrationModeInput`<sup>Optional</sup> <a name="AppEngineIntegrationModeInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationModeInput"></a>

```go
func AppEngineIntegrationModeInput() *string
```

- *Type:* *string

---

##### `ConcurrencyModeInput`<sup>Optional</sup> <a name="ConcurrencyModeInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyModeInput"></a>

```go
func ConcurrencyModeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationIdInput`<sup>Optional</sup> <a name="LocationIdInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationIdInput"></a>

```go
func LocationIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AppEngineIntegrationMode`<sup>Required</sup> <a name="AppEngineIntegrationMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationMode"></a>

```go
func AppEngineIntegrationMode() *string
```

- *Type:* *string

---

##### `ConcurrencyMode`<sup>Required</sup> <a name="ConcurrencyMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyMode"></a>

```go
func ConcurrencyMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationId"></a>

```go
func LocationId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreDatabaseConfig <a name="GoogleFirestoreDatabaseConfig" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoredatabase"

&googlefirestoredatabase.GoogleFirestoreDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LocationId: *string,
	Name: *string,
	Type: *string,
	AppEngineIntegrationMode: *string,
	ConcurrencyMode: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.locationId">LocationId</a></code> | <code>*string</code> | The location of the database. Available databases are listed at https://cloud.google.com/firestore/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | The ID to use for the database, which will become the final component of the database's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.type">Type</a></code> | <code>*string</code> | The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.appEngineIntegrationMode">AppEngineIntegrationMode</a></code> | <code>*string</code> | The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.concurrencyMode">ConcurrencyMode</a></code> | <code>*string</code> | The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#id GoogleFirestoreDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#project GoogleFirestoreDatabase#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.locationId"></a>

```go
LocationId *string
```

- *Type:* *string

The location of the database. Available databases are listed at https://cloud.google.com/firestore/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#location_id GoogleFirestoreDatabase#location_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID to use for the database, which will become the final component of the database's resource name.

This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#name GoogleFirestoreDatabase#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#type GoogleFirestoreDatabase#type}

---

##### `AppEngineIntegrationMode`<sup>Optional</sup> <a name="AppEngineIntegrationMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.appEngineIntegrationMode"></a>

```go
AppEngineIntegrationMode *string
```

- *Type:* *string

The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#app_engine_integration_mode GoogleFirestoreDatabase#app_engine_integration_mode}

---

##### `ConcurrencyMode`<sup>Optional</sup> <a name="ConcurrencyMode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.concurrencyMode"></a>

```go
ConcurrencyMode *string
```

- *Type:* *string

The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#concurrency_mode GoogleFirestoreDatabase#concurrency_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#id GoogleFirestoreDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#project GoogleFirestoreDatabase#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.timeouts"></a>

```go
Timeouts GoogleFirestoreDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#timeouts GoogleFirestoreDatabase#timeouts}

---

### GoogleFirestoreDatabaseTimeouts <a name="GoogleFirestoreDatabaseTimeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoredatabase"

&googlefirestoredatabase.GoogleFirestoreDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#create GoogleFirestoreDatabase#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#delete GoogleFirestoreDatabase#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#update GoogleFirestoreDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#create GoogleFirestoreDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#delete GoogleFirestoreDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_firestore_database#update GoogleFirestoreDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreDatabaseTimeoutsOutputReference <a name="GoogleFirestoreDatabaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirestoredatabase"

googlefirestoredatabase.NewGoogleFirestoreDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirestoreDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



