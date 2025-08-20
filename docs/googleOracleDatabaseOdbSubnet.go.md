# `googleOracleDatabaseOdbSubnet` Submodule <a name="`googleOracleDatabaseOdbSubnet` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseOdbSubnet <a name="GoogleOracleDatabaseOdbSubnet" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet google_oracle_database_odb_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleoracledatabaseodbsubnet"

googleoracledatabaseodbsubnet.NewGoogleOracleDatabaseOdbSubnet(scope Construct, id *string, config GoogleOracleDatabaseOdbSubnetConfig) GoogleOracleDatabaseOdbSubnet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig">GoogleOracleDatabaseOdbSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig">GoogleOracleDatabaseOdbSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOracleDatabaseOdbSubnetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseOdbSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleoracledatabaseodbsubnet"

googleoracledatabaseodbsubnet.GoogleOracleDatabaseOdbSubnet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleoracledatabaseodbsubnet"

googleoracledatabaseodbsubnet.GoogleOracleDatabaseOdbSubnet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleoracledatabaseodbsubnet"

googleoracledatabaseodbsubnet.GoogleOracleDatabaseOdbSubnet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleoracledatabaseodbsubnet"

googleoracledatabaseodbsubnet.GoogleOracleDatabaseOdbSubnet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleOracleDatabaseOdbSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOracleDatabaseOdbSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOracleDatabaseOdbSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseOdbSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference">GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRangeInput">CidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetworkInput">OdbnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetIdInput">OdbSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purposeInput">PurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRange">CidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetwork">Odbnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetId">OdbSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeouts"></a>

```go
func Timeouts() GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference">GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference</a>

---

##### `CidrRangeInput`<sup>Optional</sup> <a name="CidrRangeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRangeInput"></a>

```go
func CidrRangeInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OdbnetworkInput`<sup>Optional</sup> <a name="OdbnetworkInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetworkInput"></a>

```go
func OdbnetworkInput() *string
```

- *Type:* *string

---

##### `OdbSubnetIdInput`<sup>Optional</sup> <a name="OdbSubnetIdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetIdInput"></a>

```go
func OdbSubnetIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purposeInput"></a>

```go
func PurposeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRange"></a>

```go
func CidrRange() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetwork"></a>

```go
func Odbnetwork() *string
```

- *Type:* *string

---

##### `OdbSubnetId`<sup>Required</sup> <a name="OdbSubnetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetId"></a>

```go
func OdbSubnetId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseOdbSubnetConfig <a name="GoogleOracleDatabaseOdbSubnetConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleoracledatabaseodbsubnet"

&googleoracledatabaseodbsubnet.GoogleOracleDatabaseOdbSubnetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CidrRange: *string,
	Location: *string,
	Odbnetwork: *string,
	OdbSubnetId: *string,
	Purpose: *string,
	DeletionProtection: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.cidrRange">CidrRange</a></code> | <code>*string</code> | The CIDR range of the subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbnetwork">Odbnetwork</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbSubnetId">OdbSubnetId</a></code> | <code>*string</code> | The ID of the OdbSubnet to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.purpose">Purpose</a></code> | <code>*string</code> | Purpose of the subnet. Possible values: CLIENT_SUBNET BACKUP_SUBNET. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#id GoogleOracleDatabaseOdbSubnet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#project GoogleOracleDatabaseOdbSubnet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.cidrRange"></a>

```go
CidrRange *string
```

- *Type:* *string

The CIDR range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#cidr_range GoogleOracleDatabaseOdbSubnet#cidr_range}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#location GoogleOracleDatabaseOdbSubnet#location}

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbnetwork"></a>

```go
Odbnetwork *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#odbnetwork GoogleOracleDatabaseOdbSubnet#odbnetwork}

---

##### `OdbSubnetId`<sup>Required</sup> <a name="OdbSubnetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbSubnetId"></a>

```go
OdbSubnetId *string
```

- *Type:* *string

The ID of the OdbSubnet to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#odb_subnet_id GoogleOracleDatabaseOdbSubnet#odb_subnet_id}

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.purpose"></a>

```go
Purpose *string
```

- *Type:* *string

Purpose of the subnet. Possible values: CLIENT_SUBNET BACKUP_SUBNET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#purpose GoogleOracleDatabaseOdbSubnet#purpose}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#deletion_protection GoogleOracleDatabaseOdbSubnet#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#id GoogleOracleDatabaseOdbSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#labels GoogleOracleDatabaseOdbSubnet#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#project GoogleOracleDatabaseOdbSubnet#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.timeouts"></a>

```go
Timeouts GoogleOracleDatabaseOdbSubnetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#timeouts GoogleOracleDatabaseOdbSubnet#timeouts}

---

### GoogleOracleDatabaseOdbSubnetTimeouts <a name="GoogleOracleDatabaseOdbSubnetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleoracledatabaseodbsubnet"

&googleoracledatabaseodbsubnet.GoogleOracleDatabaseOdbSubnetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#create GoogleOracleDatabaseOdbSubnet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#delete GoogleOracleDatabaseOdbSubnet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#update GoogleOracleDatabaseOdbSubnet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#create GoogleOracleDatabaseOdbSubnet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#delete GoogleOracleDatabaseOdbSubnet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_oracle_database_odb_subnet#update GoogleOracleDatabaseOdbSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference <a name="GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleoracledatabaseodbsubnet"

googleoracledatabaseodbsubnet.NewGoogleOracleDatabaseOdbSubnetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



