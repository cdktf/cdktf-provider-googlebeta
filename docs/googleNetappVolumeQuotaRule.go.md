# `googleNetappVolumeQuotaRule` Submodule <a name="`googleNetappVolumeQuotaRule` Submodule" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolumeQuotaRule <a name="GoogleNetappVolumeQuotaRule" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule google_netapp_volume_quota_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetappvolumequotarule"

googlenetappvolumequotarule.NewGoogleNetappVolumeQuotaRule(scope Construct, id *string, config GoogleNetappVolumeQuotaRuleConfig) GoogleNetappVolumeQuotaRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig">GoogleNetappVolumeQuotaRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig">GoogleNetappVolumeQuotaRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetappVolumeQuotaRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetappvolumequotarule"

googlenetappvolumequotarule.GoogleNetappVolumeQuotaRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetappvolumequotarule"

googlenetappvolumequotarule.GoogleNetappVolumeQuotaRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetappvolumequotarule"

googlenetappvolumequotarule.GoogleNetappVolumeQuotaRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetappvolumequotarule"

googlenetappvolumequotarule.GoogleNetappVolumeQuotaRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetappVolumeQuotaRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetappVolumeQuotaRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolumeQuotaRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.stateDetails">StateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference">GoogleNetappVolumeQuotaRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMibInput">DiskLimitMibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeNameInput">VolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMib">DiskLimitMib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.stateDetails"></a>

```go
func StateDetails() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeouts"></a>

```go
func Timeouts() GoogleNetappVolumeQuotaRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference">GoogleNetappVolumeQuotaRuleTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiskLimitMibInput`<sup>Optional</sup> <a name="DiskLimitMibInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMibInput"></a>

```go
func DiskLimitMibInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeNameInput"></a>

```go
func VolumeNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiskLimitMib`<sup>Required</sup> <a name="DiskLimitMib" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMib"></a>

```go
func DiskLimitMib() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeQuotaRuleConfig <a name="GoogleNetappVolumeQuotaRuleConfig" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetappvolumequotarule"

&googlenetappvolumequotarule.GoogleNetappVolumeQuotaRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DiskLimitMib: *f64,
	Name: *string,
	Type: *string,
	VolumeName: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Target: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.diskLimitMib">DiskLimitMib</a></code> | <code>*f64</code> | The maximum allowed capacity in MiB. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the quotaRule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.type">Type</a></code> | <code>*string</code> | Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.volumeName">VolumeName</a></code> | <code>*string</code> | Name of the volume to create the quotaRule in. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.description">Description</a></code> | <code>*string</code> | Description for the quota rule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.location">Location</a></code> | <code>*string</code> | Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.target">Target</a></code> | <code>*string</code> | The quota rule applies to the specified user or group. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiskLimitMib`<sup>Required</sup> <a name="DiskLimitMib" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.diskLimitMib"></a>

```go
DiskLimitMib *f64
```

- *Type:* *f64

The maximum allowed capacity in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#disk_limit_mib GoogleNetappVolumeQuotaRule#disk_limit_mib}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the quotaRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#name GoogleNetappVolumeQuotaRule#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#type GoogleNetappVolumeQuotaRule#type}

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.volumeName"></a>

```go
VolumeName *string
```

- *Type:* *string

Name of the volume to create the quotaRule in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#volume_name GoogleNetappVolumeQuotaRule#volume_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description for the quota rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#description GoogleNetappVolumeQuotaRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#labels GoogleNetappVolumeQuotaRule#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#location GoogleNetappVolumeQuotaRule#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

The quota rule applies to the specified user or group.

Valid targets for volumes with NFS protocol enabled:

* UNIX UID for individual user quota
* UNIX GID for individual group quota
  Valid targets for volumes with SMB protocol enabled:
* Windows SID for individual user quota
  Leave empty for default quotas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#target GoogleNetappVolumeQuotaRule#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.timeouts"></a>

```go
Timeouts GoogleNetappVolumeQuotaRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#timeouts GoogleNetappVolumeQuotaRule#timeouts}

---

### GoogleNetappVolumeQuotaRuleTimeouts <a name="GoogleNetappVolumeQuotaRuleTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetappvolumequotarule"

&googlenetappvolumequotarule.GoogleNetappVolumeQuotaRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#create GoogleNetappVolumeQuotaRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#delete GoogleNetappVolumeQuotaRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#update GoogleNetappVolumeQuotaRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#create GoogleNetappVolumeQuotaRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#delete GoogleNetappVolumeQuotaRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume_quota_rule#update GoogleNetappVolumeQuotaRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeQuotaRuleTimeoutsOutputReference <a name="GoogleNetappVolumeQuotaRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetappvolumequotarule"

googlenetappvolumequotarule.NewGoogleNetappVolumeQuotaRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeQuotaRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



