# `googleAccessContextManagerAuthorizedOrgsDesc` Submodule <a name="`googleAccessContextManagerAuthorizedOrgsDesc` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerAuthorizedOrgsDesc <a name="GoogleAccessContextManagerAuthorizedOrgsDesc" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc google_access_context_manager_authorized_orgs_desc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerauthorizedorgsdesc"

googleaccesscontextmanagerauthorizedorgsdesc.NewGoogleAccessContextManagerAuthorizedOrgsDesc(scope Construct, id *string, config GoogleAccessContextManagerAuthorizedOrgsDescConfig) GoogleAccessContextManagerAuthorizedOrgsDesc
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig">GoogleAccessContextManagerAuthorizedOrgsDescConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig">GoogleAccessContextManagerAuthorizedOrgsDescConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAssetType">ResetAssetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection">ResetAuthorizationDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetOrgs">ResetOrgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAccessContextManagerAuthorizedOrgsDescTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts">GoogleAccessContextManagerAuthorizedOrgsDescTimeouts</a>

---

##### `ResetAssetType` <a name="ResetAssetType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAssetType"></a>

```go
func ResetAssetType()
```

##### `ResetAuthorizationDirection` <a name="ResetAuthorizationDirection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection"></a>

```go
func ResetAuthorizationDirection()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType"></a>

```go
func ResetAuthorizationType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetId"></a>

```go
func ResetId()
```

##### `ResetOrgs` <a name="ResetOrgs" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetOrgs"></a>

```go
func ResetOrgs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerAuthorizedOrgsDesc resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerauthorizedorgsdesc"

googleaccesscontextmanagerauthorizedorgsdesc.GoogleAccessContextManagerAuthorizedOrgsDesc_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerauthorizedorgsdesc"

googleaccesscontextmanagerauthorizedorgsdesc.GoogleAccessContextManagerAuthorizedOrgsDesc_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerauthorizedorgsdesc"

googleaccesscontextmanagerauthorizedorgsdesc.GoogleAccessContextManagerAuthorizedOrgsDesc_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerauthorizedorgsdesc"

googleaccesscontextmanagerauthorizedorgsdesc.GoogleAccessContextManagerAuthorizedOrgsDesc_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAccessContextManagerAuthorizedOrgsDesc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAccessContextManagerAuthorizedOrgsDesc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAccessContextManagerAuthorizedOrgsDesc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerAuthorizedOrgsDesc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput">AssetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput">AuthorizationDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.orgsInput">OrgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.assetType">AssetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection">AuthorizationDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.orgs">Orgs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.timeouts"></a>

```go
func Timeouts() GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput"></a>

```go
func AssetTypeInput() *string
```

- *Type:* *string

---

##### `AuthorizationDirectionInput`<sup>Optional</sup> <a name="AuthorizationDirectionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput"></a>

```go
func AuthorizationDirectionInput() *string
```

- *Type:* *string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput"></a>

```go
func AuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrgsInput`<sup>Optional</sup> <a name="OrgsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.orgsInput"></a>

```go
func OrgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.assetType"></a>

```go
func AssetType() *string
```

- *Type:* *string

---

##### `AuthorizationDirection`<sup>Required</sup> <a name="AuthorizationDirection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection"></a>

```go
func AuthorizationDirection() *string
```

- *Type:* *string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Orgs`<sup>Required</sup> <a name="Orgs" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.orgs"></a>

```go
func Orgs() *[]*string
```

- *Type:* *[]*string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerAuthorizedOrgsDescConfig <a name="GoogleAccessContextManagerAuthorizedOrgsDescConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerauthorizedorgsdesc"

&googleaccesscontextmanagerauthorizedorgsdesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Parent: *string,
	AssetType: *string,
	AuthorizationDirection: *string,
	AuthorizationType: *string,
	Id: *string,
	Orgs: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.name">Name</a></code> | <code>*string</code> | Resource name for the 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.parent">Parent</a></code> | <code>*string</code> | Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.assetType">AssetType</a></code> | <code>*string</code> | The type of entities that need to use the authorization relationship during evaluation, such as a device. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection">AuthorizationDirection</a></code> | <code>*string</code> | The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#id GoogleAccessContextManagerAuthorizedOrgsDesc#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.orgs">Orgs</a></code> | <code>*[]*string</code> | The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts">GoogleAccessContextManagerAuthorizedOrgsDescTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Resource name for the 'AuthorizedOrgsDesc'.

Format:
'accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}'.
The 'authorized_orgs_desc' component must begin with a letter, followed by
alphanumeric characters or '_'.
After you create an 'AuthorizedOrgsDesc', you cannot change its 'name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#name GoogleAccessContextManagerAuthorizedOrgsDesc#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#parent GoogleAccessContextManagerAuthorizedOrgsDesc#parent}

---

##### `AssetType`<sup>Optional</sup> <a name="AssetType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.assetType"></a>

```go
AssetType *string
```

- *Type:* *string

The type of entities that need to use the authorization relationship during evaluation, such as a device.

Valid values are "ASSET_TYPE_DEVICE" and
"ASSET_TYPE_CREDENTIAL_STRENGTH". Possible values: ["ASSET_TYPE_DEVICE", "ASSET_TYPE_CREDENTIAL_STRENGTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#asset_type GoogleAccessContextManagerAuthorizedOrgsDesc#asset_type}

---

##### `AuthorizationDirection`<sup>Optional</sup> <a name="AuthorizationDirection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection"></a>

```go
AuthorizationDirection *string
```

- *Type:* *string

The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field.

The valid values for this
field include the following:

AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
in the organizations listed in the 'orgs' field.

AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the 'orgs'
field to evaluate the traffic in this organization.

For the authorization relationship to take effect, all of the organizations
must authorize and specify the appropriate relationship direction. For
example, if organization A authorized organization B and C to evaluate its
traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
direction, organizations B and C must specify
"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
"AuthorizedOrgsDesc" resource. Possible values: ["AUTHORIZATION_DIRECTION_TO", "AUTHORIZATION_DIRECTION_FROM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#authorization_direction GoogleAccessContextManagerAuthorizedOrgsDesc#authorization_direction}

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType"></a>

```go
AuthorizationType *string
```

- *Type:* *string

A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#authorization_type GoogleAccessContextManagerAuthorizedOrgsDesc#authorization_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#id GoogleAccessContextManagerAuthorizedOrgsDesc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Orgs`<sup>Optional</sup> <a name="Orgs" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.orgs"></a>

```go
Orgs *[]*string
```

- *Type:* *[]*string

The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#orgs GoogleAccessContextManagerAuthorizedOrgsDesc#orgs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.timeouts"></a>

```go
Timeouts GoogleAccessContextManagerAuthorizedOrgsDescTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts">GoogleAccessContextManagerAuthorizedOrgsDescTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#timeouts GoogleAccessContextManagerAuthorizedOrgsDesc#timeouts}

---

### GoogleAccessContextManagerAuthorizedOrgsDescTimeouts <a name="GoogleAccessContextManagerAuthorizedOrgsDescTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerauthorizedorgsdesc"

&googleaccesscontextmanagerauthorizedorgsdesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#create GoogleAccessContextManagerAuthorizedOrgsDesc#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#delete GoogleAccessContextManagerAuthorizedOrgsDesc#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#update GoogleAccessContextManagerAuthorizedOrgsDesc#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#create GoogleAccessContextManagerAuthorizedOrgsDesc#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#delete GoogleAccessContextManagerAuthorizedOrgsDesc#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_authorized_orgs_desc#update GoogleAccessContextManagerAuthorizedOrgsDesc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference <a name="GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerauthorizedorgsdesc"

googleaccesscontextmanagerauthorizedorgsdesc.NewGoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



