# `googleGkeHubFleet` Submodule <a name="`googleGkeHubFleet` Submodule" id="@cdktf/provider-google-beta.googleGkeHubFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubFleet <a name="GoogleGkeHubFleet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet google_gke_hub_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.NewGoogleGkeHubFleet(scope Construct, id *string, config GoogleGkeHubFleetConfig) GoogleGkeHubFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig">GoogleGkeHubFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig">GoogleGkeHubFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putDefaultClusterConfig">PutDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetDefaultClusterConfig">ResetDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultClusterConfig` <a name="PutDefaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putDefaultClusterConfig"></a>

```go
func PutDefaultClusterConfig(value GoogleGkeHubFleetDefaultClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putDefaultClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGkeHubFleetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a>

---

##### `ResetDefaultClusterConfig` <a name="ResetDefaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetDefaultClusterConfig"></a>

```go
func ResetDefaultClusterConfig()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeHubFleet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.GoogleGkeHubFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.GoogleGkeHubFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.GoogleGkeHubFleet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.GoogleGkeHubFleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGkeHubFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGkeHubFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGkeHubFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.defaultClusterConfig">DefaultClusterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.state">State</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList">GoogleGkeHubFleetStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference">GoogleGkeHubFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.defaultClusterConfigInput">DefaultClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DefaultClusterConfig`<sup>Required</sup> <a name="DefaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.defaultClusterConfig"></a>

```go
func DefaultClusterConfig() GoogleGkeHubFleetDefaultClusterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigOutputReference</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.state"></a>

```go
func State() GoogleGkeHubFleetStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList">GoogleGkeHubFleetStateList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.timeouts"></a>

```go
func Timeouts() GoogleGkeHubFleetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference">GoogleGkeHubFleetTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DefaultClusterConfigInput`<sup>Optional</sup> <a name="DefaultClusterConfigInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.defaultClusterConfigInput"></a>

```go
func DefaultClusterConfigInput() GoogleGkeHubFleetDefaultClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubFleetConfig <a name="GoogleGkeHubFleetConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

&googlegkehubfleet.GoogleGkeHubFleetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultClusterConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleGkeHubFleet.GoogleGkeHubFleetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.defaultClusterConfig">DefaultClusterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a></code> | default_cluster_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A user-assigned display name of the Fleet. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#id GoogleGkeHubFleet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#project GoogleGkeHubFleet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultClusterConfig`<sup>Optional</sup> <a name="DefaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.defaultClusterConfig"></a>

```go
DefaultClusterConfig GoogleGkeHubFleetDefaultClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a>

default_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#default_cluster_config GoogleGkeHubFleet#default_cluster_config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A user-assigned display name of the Fleet.

When present, it must be between 4 to 30 characters.
Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#display_name GoogleGkeHubFleet#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#id GoogleGkeHubFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#project GoogleGkeHubFleet#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetConfig.property.timeouts"></a>

```go
Timeouts GoogleGkeHubFleetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts">GoogleGkeHubFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#timeouts GoogleGkeHubFleet#timeouts}

---

### GoogleGkeHubFleetDefaultClusterConfig <a name="GoogleGkeHubFleetDefaultClusterConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

&googlegkehubfleet.GoogleGkeHubFleetDefaultClusterConfig {
	BinaryAuthorizationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig,
	SecurityPostureConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.property.binaryAuthorizationConfig">BinaryAuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | binary_authorization_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.property.securityPostureConfig">SecurityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | security_posture_config block. |

---

##### `BinaryAuthorizationConfig`<sup>Optional</sup> <a name="BinaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.property.binaryAuthorizationConfig"></a>

```go
BinaryAuthorizationConfig GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

binary_authorization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#binary_authorization_config GoogleGkeHubFleet#binary_authorization_config}

---

##### `SecurityPostureConfig`<sup>Optional</sup> <a name="SecurityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig.property.securityPostureConfig"></a>

```go
SecurityPostureConfig GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#security_posture_config GoogleGkeHubFleet#security_posture_config}

---

### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

&googlegkehubfleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig {
	EvaluationMode: *string,
	PolicyBindings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.evaluationMode">EvaluationMode</a></code> | <code>*string</code> | Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.policyBindings">PolicyBindings</a></code> | <code>interface{}</code> | policy_bindings block. |

---

##### `EvaluationMode`<sup>Optional</sup> <a name="EvaluationMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.evaluationMode"></a>

```go
EvaluationMode *string
```

- *Type:* *string

Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#evaluation_mode GoogleGkeHubFleet#evaluation_mode}

---

##### `PolicyBindings`<sup>Optional</sup> <a name="PolicyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.policyBindings"></a>

```go
PolicyBindings interface{}
```

- *Type:* interface{}

policy_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#policy_bindings GoogleGkeHubFleet#policy_bindings}

---

### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

&googlegkehubfleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.property.name">Name</a></code> | <code>*string</code> | The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: 'projects/{project_number}/platforms/gke/policies/{policy_id}'. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.property.name"></a>

```go
Name *string
```

- *Type:* *string

The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: 'projects/{project_number}/platforms/gke/policies/{policy_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#name GoogleGkeHubFleet#name}

---

### GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig <a name="GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

&googlegkehubfleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig {
	Mode: *string,
	VulnerabilityMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.mode">Mode</a></code> | <code>*string</code> | Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.vulnerabilityMode">VulnerabilityMode</a></code> | <code>*string</code> | Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"]. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#mode GoogleGkeHubFleet#mode}

---

##### `VulnerabilityMode`<sup>Optional</sup> <a name="VulnerabilityMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.vulnerabilityMode"></a>

```go
VulnerabilityMode *string
```

- *Type:* *string

Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#vulnerability_mode GoogleGkeHubFleet#vulnerability_mode}

---

### GoogleGkeHubFleetState <a name="GoogleGkeHubFleetState" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

&googlegkehubfleet.GoogleGkeHubFleetState {

}
```


### GoogleGkeHubFleetTimeouts <a name="GoogleGkeHubFleetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

&googlegkehubfleet.GoogleGkeHubFleetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#create GoogleGkeHubFleet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#delete GoogleGkeHubFleet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#update GoogleGkeHubFleet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#create GoogleGkeHubFleet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#delete GoogleGkeHubFleet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_gke_hub_fleet#update GoogleGkeHubFleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.NewGoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings">PutPolicyBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetEvaluationMode">ResetEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetPolicyBindings">ResetPolicyBindings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicyBindings` <a name="PutPolicyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings"></a>

```go
func PutPolicyBindings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEvaluationMode` <a name="ResetEvaluationMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetEvaluationMode"></a>

```go
func ResetEvaluationMode()
```

##### `ResetPolicyBindings` <a name="ResetPolicyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetPolicyBindings"></a>

```go
func ResetPolicyBindings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindings">PolicyBindings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationModeInput">EvaluationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindingsInput">PolicyBindingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationMode">EvaluationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyBindings`<sup>Required</sup> <a name="PolicyBindings" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindings"></a>

```go
func PolicyBindings() GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList</a>

---

##### `EvaluationModeInput`<sup>Optional</sup> <a name="EvaluationModeInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationModeInput"></a>

```go
func EvaluationModeInput() *string
```

- *Type:* *string

---

##### `PolicyBindingsInput`<sup>Optional</sup> <a name="PolicyBindingsInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindingsInput"></a>

```go
func PolicyBindingsInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationMode"></a>

```go
func EvaluationMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---


### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.NewGoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get"></a>

```go
func Get(index *f64) GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference <a name="GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.NewGoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeHubFleetDefaultClusterConfigOutputReference <a name="GoogleGkeHubFleetDefaultClusterConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.NewGoogleGkeHubFleetDefaultClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFleetDefaultClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig">PutBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig">PutSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resetBinaryAuthorizationConfig">ResetBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resetSecurityPostureConfig">ResetSecurityPostureConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBinaryAuthorizationConfig` <a name="PutBinaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig"></a>

```go
func PutBinaryAuthorizationConfig(value GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---

##### `PutSecurityPostureConfig` <a name="PutSecurityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig"></a>

```go
func PutSecurityPostureConfig(value GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---

##### `ResetBinaryAuthorizationConfig` <a name="ResetBinaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resetBinaryAuthorizationConfig"></a>

```go
func ResetBinaryAuthorizationConfig()
```

##### `ResetSecurityPostureConfig` <a name="ResetSecurityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.resetSecurityPostureConfig"></a>

```go
func ResetSecurityPostureConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfig">BinaryAuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfig">SecurityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfigInput">BinaryAuthorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfigInput">SecurityPostureConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryAuthorizationConfig`<sup>Required</sup> <a name="BinaryAuthorizationConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfig"></a>

```go
func BinaryAuthorizationConfig() GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference</a>

---

##### `SecurityPostureConfig`<sup>Required</sup> <a name="SecurityPostureConfig" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfig"></a>

```go
func SecurityPostureConfig() GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference</a>

---

##### `BinaryAuthorizationConfigInput`<sup>Optional</sup> <a name="BinaryAuthorizationConfigInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfigInput"></a>

```go
func BinaryAuthorizationConfigInput() GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GoogleGkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---

##### `SecurityPostureConfigInput`<sup>Optional</sup> <a name="SecurityPostureConfigInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfigInput"></a>

```go
func SecurityPostureConfigInput() GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFleetDefaultClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfig">GoogleGkeHubFleetDefaultClusterConfig</a>

---


### GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference <a name="GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.NewGoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetVulnerabilityMode">ResetVulnerabilityMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetVulnerabilityMode` <a name="ResetVulnerabilityMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetVulnerabilityMode"></a>

```go
func ResetVulnerabilityMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityModeInput">VulnerabilityModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityMode">VulnerabilityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `VulnerabilityModeInput`<sup>Optional</sup> <a name="VulnerabilityModeInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityModeInput"></a>

```go
func VulnerabilityModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `VulnerabilityMode`<sup>Required</sup> <a name="VulnerabilityMode" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityMode"></a>

```go
func VulnerabilityMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig">GoogleGkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---


### GoogleGkeHubFleetStateList <a name="GoogleGkeHubFleetStateList" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.NewGoogleGkeHubFleetStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeHubFleetStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.get"></a>

```go
func Get(index *f64) GoogleGkeHubFleetStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeHubFleetStateOutputReference <a name="GoogleGkeHubFleetStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.NewGoogleGkeHubFleetStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeHubFleetStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetState">GoogleGkeHubFleetState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubFleetState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetState">GoogleGkeHubFleetState</a>

---


### GoogleGkeHubFleetTimeoutsOutputReference <a name="GoogleGkeHubFleetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlegkehubfleet"

googlegkehubfleet.NewGoogleGkeHubFleetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubFleetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFleet.GoogleGkeHubFleetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



