# `googleServiceNetworkingConnection` Submodule <a name="`googleServiceNetworkingConnection` Submodule" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceNetworkingConnection <a name="GoogleServiceNetworkingConnection" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection google_service_networking_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicenetworkingconnection"

googleservicenetworkingconnection.NewGoogleServiceNetworkingConnection(scope Construct, id *string, config GoogleServiceNetworkingConnectionConfig) GoogleServiceNetworkingConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig">GoogleServiceNetworkingConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig">GoogleServiceNetworkingConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetUpdateOnCreationFail">ResetUpdateOnCreationFail</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.putTimeouts"></a>

```go
func PutTimeouts(value GoogleServiceNetworkingConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdateOnCreationFail` <a name="ResetUpdateOnCreationFail" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetUpdateOnCreationFail"></a>

```go
func ResetUpdateOnCreationFail()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleServiceNetworkingConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicenetworkingconnection"

googleservicenetworkingconnection.GoogleServiceNetworkingConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicenetworkingconnection"

googleservicenetworkingconnection.GoogleServiceNetworkingConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicenetworkingconnection"

googleservicenetworkingconnection.GoogleServiceNetworkingConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicenetworkingconnection"

googleservicenetworkingconnection.GoogleServiceNetworkingConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleServiceNetworkingConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleServiceNetworkingConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleServiceNetworkingConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceNetworkingConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.peering">Peering</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference">GoogleServiceNetworkingConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.reservedPeeringRangesInput">ReservedPeeringRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.updateOnCreationFailInput">UpdateOnCreationFailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.reservedPeeringRanges">ReservedPeeringRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.updateOnCreationFail">UpdateOnCreationFail</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.peering"></a>

```go
func Peering() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.timeouts"></a>

```go
func Timeouts() GoogleServiceNetworkingConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference">GoogleServiceNetworkingConnectionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ReservedPeeringRangesInput`<sup>Optional</sup> <a name="ReservedPeeringRangesInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.reservedPeeringRangesInput"></a>

```go
func ReservedPeeringRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateOnCreationFailInput`<sup>Optional</sup> <a name="UpdateOnCreationFailInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.updateOnCreationFailInput"></a>

```go
func UpdateOnCreationFailInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ReservedPeeringRanges`<sup>Required</sup> <a name="ReservedPeeringRanges" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.reservedPeeringRanges"></a>

```go
func ReservedPeeringRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `UpdateOnCreationFail`<sup>Required</sup> <a name="UpdateOnCreationFail" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.updateOnCreationFail"></a>

```go
func UpdateOnCreationFail() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceNetworkingConnectionConfig <a name="GoogleServiceNetworkingConnectionConfig" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicenetworkingconnection"

&googleservicenetworkingconnection.GoogleServiceNetworkingConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Network: *string,
	ReservedPeeringRanges: *[]*string,
	Service: *string,
	DeletionPolicy: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts,
	UpdateOnCreationFail: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.network">Network</a></code> | <code>*string</code> | Name of VPC network connected with service producers using VPC peering. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.reservedPeeringRanges">ReservedPeeringRanges</a></code> | <code>*[]*string</code> | Named IP address range(s) of PEERING type reserved for this service provider. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.service">Service</a></code> | <code>*string</code> | Provider peering service that is managing peering connectivity for a service provider organization. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | When set to ABANDON, terraform will abandon management of the resource instead of deleting it. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#id GoogleServiceNetworkingConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.updateOnCreationFail">UpdateOnCreationFail</a></code> | <code>interface{}</code> | When set to true, enforce an update of the reserved peering ranges on the existing service networking connection in case of a new connection creation failure. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Name of VPC network connected with service producers using VPC peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#network GoogleServiceNetworkingConnection#network}

---

##### `ReservedPeeringRanges`<sup>Required</sup> <a name="ReservedPeeringRanges" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.reservedPeeringRanges"></a>

```go
ReservedPeeringRanges *[]*string
```

- *Type:* *[]*string

Named IP address range(s) of PEERING type reserved for this service provider.

Note that invoking this method with a different range when connection is already established will not reallocate already provisioned service producer subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#reserved_peering_ranges GoogleServiceNetworkingConnection#reserved_peering_ranges}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Provider peering service that is managing peering connectivity for a service provider organization.

For Google services that support this functionality it is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#service GoogleServiceNetworkingConnection#service}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

When set to ABANDON, terraform will abandon management of the resource instead of deleting it.

Prevents terraform apply failures with CloudSQL. Note: The resource will still exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#deletion_policy GoogleServiceNetworkingConnection#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#id GoogleServiceNetworkingConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.timeouts"></a>

```go
Timeouts GoogleServiceNetworkingConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#timeouts GoogleServiceNetworkingConnection#timeouts}

---

##### `UpdateOnCreationFail`<sup>Optional</sup> <a name="UpdateOnCreationFail" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.updateOnCreationFail"></a>

```go
UpdateOnCreationFail interface{}
```

- *Type:* interface{}

When set to true, enforce an update of the reserved peering ranges on the existing service networking connection in case of a new connection creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#update_on_creation_fail GoogleServiceNetworkingConnection#update_on_creation_fail}

---

### GoogleServiceNetworkingConnectionTimeouts <a name="GoogleServiceNetworkingConnectionTimeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicenetworkingconnection"

&googleservicenetworkingconnection.GoogleServiceNetworkingConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#create GoogleServiceNetworkingConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#delete GoogleServiceNetworkingConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#update GoogleServiceNetworkingConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#create GoogleServiceNetworkingConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#delete GoogleServiceNetworkingConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_service_networking_connection#update GoogleServiceNetworkingConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceNetworkingConnectionTimeoutsOutputReference <a name="GoogleServiceNetworkingConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicenetworkingconnection"

googleservicenetworkingconnection.NewGoogleServiceNetworkingConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleServiceNetworkingConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



