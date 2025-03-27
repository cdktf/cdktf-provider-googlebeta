# `googleChronicleWatchlist` Submodule <a name="`googleChronicleWatchlist` Submodule" id="@cdktf/provider-google-beta.googleChronicleWatchlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleWatchlist <a name="GoogleChronicleWatchlist" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist google_chronicle_watchlist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.NewGoogleChronicleWatchlist(scope Construct, id *string, config GoogleChronicleWatchlistConfig) GoogleChronicleWatchlist
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig">GoogleChronicleWatchlistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig">GoogleChronicleWatchlistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism">PutEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences">PutWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetMultiplyingFactor">ResetMultiplyingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistId">ResetWatchlistId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistUserPreferences">ResetWatchlistUserPreferences</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntityPopulationMechanism` <a name="PutEntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism"></a>

```go
func PutEntityPopulationMechanism(value GoogleChronicleWatchlistEntityPopulationMechanism)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts"></a>

```go
func PutTimeouts(value GoogleChronicleWatchlistTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

---

##### `PutWatchlistUserPreferences` <a name="PutWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences"></a>

```go
func PutWatchlistUserPreferences(value GoogleChronicleWatchlistWatchlistUserPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetId"></a>

```go
func ResetId()
```

##### `ResetMultiplyingFactor` <a name="ResetMultiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetMultiplyingFactor"></a>

```go
func ResetMultiplyingFactor()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWatchlistId` <a name="ResetWatchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistId"></a>

```go
func ResetWatchlistId()
```

##### `ResetWatchlistUserPreferences` <a name="ResetWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistUserPreferences"></a>

```go
func ResetWatchlistUserPreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleWatchlist resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.GoogleChronicleWatchlist_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.GoogleChronicleWatchlist_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.GoogleChronicleWatchlist_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.GoogleChronicleWatchlist_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleChronicleWatchlist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleChronicleWatchlist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleChronicleWatchlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleWatchlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityCount">EntityCount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList">GoogleChronicleWatchlistEntityCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanism">EntityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference">GoogleChronicleWatchlistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferences">WatchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference">GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanismInput">EntityPopulationMechanismInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactorInput">MultiplyingFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistIdInput">WatchlistIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferencesInput">WatchlistUserPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactor">MultiplyingFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistId">WatchlistId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EntityCount`<sup>Required</sup> <a name="EntityCount" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityCount"></a>

```go
func EntityCount() GoogleChronicleWatchlistEntityCountList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList">GoogleChronicleWatchlistEntityCountList</a>

---

##### `EntityPopulationMechanism`<sup>Required</sup> <a name="EntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanism"></a>

```go
func EntityPopulationMechanism() GoogleChronicleWatchlistEntityPopulationMechanismOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeouts"></a>

```go
func Timeouts() GoogleChronicleWatchlistTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference">GoogleChronicleWatchlistTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WatchlistUserPreferences`<sup>Required</sup> <a name="WatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferences"></a>

```go
func WatchlistUserPreferences() GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference">GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntityPopulationMechanismInput`<sup>Optional</sup> <a name="EntityPopulationMechanismInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanismInput"></a>

```go
func EntityPopulationMechanismInput() GoogleChronicleWatchlistEntityPopulationMechanism
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MultiplyingFactorInput`<sup>Optional</sup> <a name="MultiplyingFactorInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactorInput"></a>

```go
func MultiplyingFactorInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WatchlistIdInput`<sup>Optional</sup> <a name="WatchlistIdInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistIdInput"></a>

```go
func WatchlistIdInput() *string
```

- *Type:* *string

---

##### `WatchlistUserPreferencesInput`<sup>Optional</sup> <a name="WatchlistUserPreferencesInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferencesInput"></a>

```go
func WatchlistUserPreferencesInput() GoogleChronicleWatchlistWatchlistUserPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MultiplyingFactor`<sup>Required</sup> <a name="MultiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactor"></a>

```go
func MultiplyingFactor() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WatchlistId`<sup>Required</sup> <a name="WatchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistId"></a>

```go
func WatchlistId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleWatchlistConfig <a name="GoogleChronicleWatchlistConfig" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

&googlechroniclewatchlist.GoogleChronicleWatchlistConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	EntityPopulationMechanism: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism,
	Instance: *string,
	Location: *string,
	Description: *string,
	Id: *string,
	MultiplyingFactor: *f64,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts,
	WatchlistId: *string,
	WatchlistUserPreferences: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.entityPopulationMechanism">EntityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.instance">Instance</a></code> | <code>*string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.multiplyingFactor">MultiplyingFactor</a></code> | <code>*f64</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistId">WatchlistId</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistUserPreferences">WatchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#display_name GoogleChronicleWatchlist#display_name}

---

##### `EntityPopulationMechanism`<sup>Required</sup> <a name="EntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.entityPopulationMechanism"></a>

```go
EntityPopulationMechanism GoogleChronicleWatchlistEntityPopulationMechanism
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#entity_population_mechanism GoogleChronicleWatchlist#entity_population_mechanism}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#instance GoogleChronicleWatchlist#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#location GoogleChronicleWatchlist#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#description GoogleChronicleWatchlist#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MultiplyingFactor`<sup>Optional</sup> <a name="MultiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.multiplyingFactor"></a>

```go
MultiplyingFactor *f64
```

- *Type:* *f64

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#multiplying_factor GoogleChronicleWatchlist#multiplying_factor}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.timeouts"></a>

```go
Timeouts GoogleChronicleWatchlistTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#timeouts GoogleChronicleWatchlist#timeouts}

---

##### `WatchlistId`<sup>Optional</sup> <a name="WatchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistId"></a>

```go
WatchlistId *string
```

- *Type:* *string

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#watchlist_id GoogleChronicleWatchlist#watchlist_id}

---

##### `WatchlistUserPreferences`<sup>Optional</sup> <a name="WatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistUserPreferences"></a>

```go
WatchlistUserPreferences GoogleChronicleWatchlistWatchlistUserPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#watchlist_user_preferences GoogleChronicleWatchlist#watchlist_user_preferences}

---

### GoogleChronicleWatchlistEntityCount <a name="GoogleChronicleWatchlistEntityCount" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

&googlechroniclewatchlist.GoogleChronicleWatchlistEntityCount {

}
```


### GoogleChronicleWatchlistEntityPopulationMechanism <a name="GoogleChronicleWatchlistEntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

&googlechroniclewatchlist.GoogleChronicleWatchlistEntityPopulationMechanism {
	Manual: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | manual block. |

---

##### `Manual`<sup>Optional</sup> <a name="Manual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.property.manual"></a>

```go
Manual GoogleChronicleWatchlistEntityPopulationMechanismManual
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#manual GoogleChronicleWatchlist#manual}

---

### GoogleChronicleWatchlistEntityPopulationMechanismManual <a name="GoogleChronicleWatchlistEntityPopulationMechanismManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

&googlechroniclewatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual {

}
```


### GoogleChronicleWatchlistTimeouts <a name="GoogleChronicleWatchlistTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

&googlechroniclewatchlist.GoogleChronicleWatchlistTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#create GoogleChronicleWatchlist#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#delete GoogleChronicleWatchlist#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#update GoogleChronicleWatchlist#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#create GoogleChronicleWatchlist#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#delete GoogleChronicleWatchlist#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#update GoogleChronicleWatchlist#update}.

---

### GoogleChronicleWatchlistWatchlistUserPreferences <a name="GoogleChronicleWatchlistWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

&googlechroniclewatchlist.GoogleChronicleWatchlistWatchlistUserPreferences {
	Pinned: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.property.pinned">Pinned</a></code> | <code>interface{}</code> | Optional. Whether the watchlist is pinned on the dashboard. |

---

##### `Pinned`<sup>Optional</sup> <a name="Pinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.property.pinned"></a>

```go
Pinned interface{}
```

- *Type:* interface{}

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_chronicle_watchlist#pinned GoogleChronicleWatchlist#pinned}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleWatchlistEntityCountList <a name="GoogleChronicleWatchlistEntityCountList" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.NewGoogleChronicleWatchlistEntityCountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleChronicleWatchlistEntityCountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get"></a>

```go
func Get(index *f64) GoogleChronicleWatchlistEntityCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleChronicleWatchlistEntityCountOutputReference <a name="GoogleChronicleWatchlistEntityCountOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.NewGoogleChronicleWatchlistEntityCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleChronicleWatchlistEntityCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.asset">Asset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.user">User</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount">GoogleChronicleWatchlistEntityCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Asset`<sup>Required</sup> <a name="Asset" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.asset"></a>

```go
func Asset() *f64
```

- *Type:* *f64

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.user"></a>

```go
func User() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleChronicleWatchlistEntityCount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount">GoogleChronicleWatchlistEntityCount</a>

---


### GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference <a name="GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.NewGoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleChronicleWatchlistEntityPopulationMechanismManual
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---


### GoogleChronicleWatchlistEntityPopulationMechanismOutputReference <a name="GoogleChronicleWatchlistEntityPopulationMechanismOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.NewGoogleChronicleWatchlistEntityPopulationMechanismOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleChronicleWatchlistEntityPopulationMechanismOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual">PutManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual">ResetManual</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManual` <a name="PutManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual"></a>

```go
func PutManual(value GoogleChronicleWatchlistEntityPopulationMechanismManual)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `ResetManual` <a name="ResetManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual"></a>

```go
func ResetManual()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput">ManualInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Manual`<sup>Required</sup> <a name="Manual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual"></a>

```go
func Manual() GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference</a>

---

##### `ManualInput`<sup>Optional</sup> <a name="ManualInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput"></a>

```go
func ManualInput() GoogleChronicleWatchlistEntityPopulationMechanismManual
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleChronicleWatchlistEntityPopulationMechanism
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---


### GoogleChronicleWatchlistTimeoutsOutputReference <a name="GoogleChronicleWatchlistTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.NewGoogleChronicleWatchlistTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleChronicleWatchlistTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference <a name="GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlechroniclewatchlist"

googlechroniclewatchlist.NewGoogleChronicleWatchlistWatchlistUserPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned">ResetPinned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinned` <a name="ResetPinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned"></a>

```go
func ResetPinned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput">PinnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned">Pinned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PinnedInput`<sup>Optional</sup> <a name="PinnedInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput"></a>

```go
func PinnedInput() interface{}
```

- *Type:* interface{}

---

##### `Pinned`<sup>Required</sup> <a name="Pinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned"></a>

```go
func Pinned() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleChronicleWatchlistWatchlistUserPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---



