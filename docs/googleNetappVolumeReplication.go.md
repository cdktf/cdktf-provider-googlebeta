# `googleNetappVolumeReplication` Submodule <a name="`googleNetappVolumeReplication` Submodule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolumeReplication <a name="GoogleNetappVolumeReplication" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication google_netapp_volume_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

googlenetappvolumereplication.NewGoogleNetappVolumeReplication(scope Construct, id *string, config GoogleNetappVolumeReplicationConfig) GoogleNetappVolumeReplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig">GoogleNetappVolumeReplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig">GoogleNetappVolumeReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters">PutDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDeleteDestinationVolume">ResetDeleteDestinationVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDestinationVolumeParameters">ResetDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetForceStopping">ResetForceStopping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetReplicationEnabled">ResetReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetWaitForMirror">ResetWaitForMirror</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationVolumeParameters` <a name="PutDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters"></a>

```go
func PutDestinationVolumeParameters(value GoogleNetappVolumeReplicationDestinationVolumeParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetappVolumeReplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

---

##### `ResetDeleteDestinationVolume` <a name="ResetDeleteDestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDeleteDestinationVolume"></a>

```go
func ResetDeleteDestinationVolume()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDestinationVolumeParameters` <a name="ResetDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDestinationVolumeParameters"></a>

```go
func ResetDestinationVolumeParameters()
```

##### `ResetForceStopping` <a name="ResetForceStopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetForceStopping"></a>

```go
func ResetForceStopping()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReplicationEnabled` <a name="ResetReplicationEnabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetReplicationEnabled"></a>

```go
func ResetReplicationEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWaitForMirror` <a name="ResetWaitForMirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetWaitForMirror"></a>

```go
func ResetWaitForMirror()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappVolumeReplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

googlenetappvolumereplication.GoogleNetappVolumeReplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

googlenetappvolumereplication.GoogleNetappVolumeReplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

googlenetappvolumereplication.GoogleNetappVolumeReplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

googlenetappvolumereplication.GoogleNetappVolumeReplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetappVolumeReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetappVolumeReplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetappVolumeReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolumeReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolume">DestinationVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParameters">DestinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference">GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.healthy">Healthy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.mirrorState">MirrorState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.sourceVolume">SourceVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.stateDetails">StateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference">GoogleNetappVolumeReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.transferStats">TransferStats</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList">GoogleNetappVolumeReplicationTransferStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolumeInput">DeleteDestinationVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParametersInput">DestinationVolumeParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStoppingInput">ForceStoppingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabledInput">ReplicationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationScheduleInput">ReplicationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeNameInput">VolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirrorInput">WaitForMirrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolume">DeleteDestinationVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStopping">ForceStopping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabled">ReplicationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationSchedule">ReplicationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirror">WaitForMirror</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DestinationVolume`<sup>Required</sup> <a name="DestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolume"></a>

```go
func DestinationVolume() *string
```

- *Type:* *string

---

##### `DestinationVolumeParameters`<sup>Required</sup> <a name="DestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParameters"></a>

```go
func DestinationVolumeParameters() GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference">GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.healthy"></a>

```go
func Healthy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MirrorState`<sup>Required</sup> <a name="MirrorState" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.mirrorState"></a>

```go
func MirrorState() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SourceVolume`<sup>Required</sup> <a name="SourceVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.sourceVolume"></a>

```go
func SourceVolume() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.stateDetails"></a>

```go
func StateDetails() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeouts"></a>

```go
func Timeouts() GoogleNetappVolumeReplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference">GoogleNetappVolumeReplicationTimeoutsOutputReference</a>

---

##### `TransferStats`<sup>Required</sup> <a name="TransferStats" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.transferStats"></a>

```go
func TransferStats() GoogleNetappVolumeReplicationTransferStatsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList">GoogleNetappVolumeReplicationTransferStatsList</a>

---

##### `DeleteDestinationVolumeInput`<sup>Optional</sup> <a name="DeleteDestinationVolumeInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolumeInput"></a>

```go
func DeleteDestinationVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationVolumeParametersInput`<sup>Optional</sup> <a name="DestinationVolumeParametersInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParametersInput"></a>

```go
func DestinationVolumeParametersInput() GoogleNetappVolumeReplicationDestinationVolumeParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `ForceStoppingInput`<sup>Optional</sup> <a name="ForceStoppingInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStoppingInput"></a>

```go
func ForceStoppingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReplicationEnabledInput`<sup>Optional</sup> <a name="ReplicationEnabledInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabledInput"></a>

```go
func ReplicationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationScheduleInput`<sup>Optional</sup> <a name="ReplicationScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationScheduleInput"></a>

```go
func ReplicationScheduleInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeNameInput"></a>

```go
func VolumeNameInput() *string
```

- *Type:* *string

---

##### `WaitForMirrorInput`<sup>Optional</sup> <a name="WaitForMirrorInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirrorInput"></a>

```go
func WaitForMirrorInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteDestinationVolume`<sup>Required</sup> <a name="DeleteDestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolume"></a>

```go
func DeleteDestinationVolume() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForceStopping`<sup>Required</sup> <a name="ForceStopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStopping"></a>

```go
func ForceStopping() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReplicationEnabled`<sup>Required</sup> <a name="ReplicationEnabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabled"></a>

```go
func ReplicationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationSchedule"></a>

```go
func ReplicationSchedule() *string
```

- *Type:* *string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

##### `WaitForMirror`<sup>Required</sup> <a name="WaitForMirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirror"></a>

```go
func WaitForMirror() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeReplicationConfig <a name="GoogleNetappVolumeReplicationConfig" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

&googlenetappvolumereplication.GoogleNetappVolumeReplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ReplicationSchedule: *string,
	VolumeName: *string,
	DeleteDestinationVolume: interface{},
	Description: *string,
	DestinationVolumeParameters: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters,
	ForceStopping: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	ReplicationEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts,
	WaitForMirror: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.location">Location</a></code> | <code>*string</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationSchedule">ReplicationSchedule</a></code> | <code>*string</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.volumeName">VolumeName</a></code> | <code>*string</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.deleteDestinationVolume">DeleteDestinationVolume</a></code> | <code>interface{}</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.description">Description</a></code> | <code>*string</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.destinationVolumeParameters">DestinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forceStopping">ForceStopping</a></code> | <code>interface{}</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationEnabled">ReplicationEnabled</a></code> | <code>interface{}</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.waitForMirror">WaitForMirror</a></code> | <code>interface{}</code> | Replication resource state is independent of mirror_state. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#location GoogleNetappVolumeReplication#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#name GoogleNetappVolumeReplication#name}

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationSchedule"></a>

```go
ReplicationSchedule *string
```

- *Type:* *string

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#replication_schedule GoogleNetappVolumeReplication#replication_schedule}

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.volumeName"></a>

```go
VolumeName *string
```

- *Type:* *string

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#volume_name GoogleNetappVolumeReplication#volume_name}

---

##### `DeleteDestinationVolume`<sup>Optional</sup> <a name="DeleteDestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.deleteDestinationVolume"></a>

```go
DeleteDestinationVolume interface{}
```

- *Type:* interface{}

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#delete_destination_volume GoogleNetappVolumeReplication#delete_destination_volume}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

##### `DestinationVolumeParameters`<sup>Optional</sup> <a name="DestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.destinationVolumeParameters"></a>

```go
DestinationVolumeParameters GoogleNetappVolumeReplicationDestinationVolumeParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#destination_volume_parameters GoogleNetappVolumeReplication#destination_volume_parameters}

---

##### `ForceStopping`<sup>Optional</sup> <a name="ForceStopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forceStopping"></a>

```go
ForceStopping interface{}
```

- *Type:* interface{}

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#force_stopping GoogleNetappVolumeReplication#force_stopping}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#labels GoogleNetappVolumeReplication#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}.

---

##### `ReplicationEnabled`<sup>Optional</sup> <a name="ReplicationEnabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationEnabled"></a>

```go
ReplicationEnabled interface{}
```

- *Type:* interface{}

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#replication_enabled GoogleNetappVolumeReplication#replication_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.timeouts"></a>

```go
Timeouts GoogleNetappVolumeReplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#timeouts GoogleNetappVolumeReplication#timeouts}

---

##### `WaitForMirror`<sup>Optional</sup> <a name="WaitForMirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.waitForMirror"></a>

```go
WaitForMirror interface{}
```

- *Type:* interface{}

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#wait_for_mirror GoogleNetappVolumeReplication#wait_for_mirror}

---

### GoogleNetappVolumeReplicationDestinationVolumeParameters <a name="GoogleNetappVolumeReplicationDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

&googlenetappvolumereplication.GoogleNetappVolumeReplicationDestinationVolumeParameters {
	StoragePool: *string,
	Description: *string,
	ShareName: *string,
	VolumeId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.storagePool">StoragePool</a></code> | <code>*string</code> | Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.description">Description</a></code> | <code>*string</code> | Description for the destination volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.shareName">ShareName</a></code> | <code>*string</code> | Share name for destination volume. If not specified, name of source volume's share name will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.volumeId">VolumeId</a></code> | <code>*string</code> | Name for the destination volume to be created. |

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.storagePool"></a>

```go
StoragePool *string
```

- *Type:* *string

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#storage_pool GoogleNetappVolumeReplication#storage_pool}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.shareName"></a>

```go
ShareName *string
```

- *Type:* *string

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#share_name GoogleNetappVolumeReplication#share_name}

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#volume_id GoogleNetappVolumeReplication#volume_id}

---

### GoogleNetappVolumeReplicationTimeouts <a name="GoogleNetappVolumeReplicationTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

&googlenetappvolumereplication.GoogleNetappVolumeReplicationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#create GoogleNetappVolumeReplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#delete GoogleNetappVolumeReplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#update GoogleNetappVolumeReplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#create GoogleNetappVolumeReplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#delete GoogleNetappVolumeReplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_netapp_volume_replication#update GoogleNetappVolumeReplication#update}.

---

### GoogleNetappVolumeReplicationTransferStats <a name="GoogleNetappVolumeReplicationTransferStats" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

&googlenetappvolumereplication.GoogleNetappVolumeReplicationTransferStats {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference <a name="GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

googlenetappvolumereplication.NewGoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId">ResetVolumeId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName"></a>

```go
func ResetShareName()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId"></a>

```go
func ResetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput">StoragePoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName">ShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool">StoragePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput"></a>

```go
func ShareNameInput() *string
```

- *Type:* *string

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput"></a>

```go
func StoragePoolInput() *string
```

- *Type:* *string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName"></a>

```go
func ShareName() *string
```

- *Type:* *string

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool"></a>

```go
func StoragePool() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeReplicationDestinationVolumeParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---


### GoogleNetappVolumeReplicationTimeoutsOutputReference <a name="GoogleNetappVolumeReplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

googlenetappvolumereplication.NewGoogleNetappVolumeReplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeReplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetappVolumeReplicationTransferStatsList <a name="GoogleNetappVolumeReplicationTransferStatsList" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

googlenetappvolumereplication.NewGoogleNetappVolumeReplicationTransferStatsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetappVolumeReplicationTransferStatsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get"></a>

```go
func Get(index *f64) GoogleNetappVolumeReplicationTransferStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleNetappVolumeReplicationTransferStatsOutputReference <a name="GoogleNetappVolumeReplicationTransferStatsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetappvolumereplication"

googlenetappvolumereplication.NewGoogleNetappVolumeReplicationTransferStatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetappVolumeReplicationTransferStatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lagDuration">LagDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes">LastTransferBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration">LastTransferDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime">LastTransferEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError">LastTransferError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration">TotalTransferDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.transferBytes">TransferBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats">GoogleNetappVolumeReplicationTransferStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LagDuration`<sup>Required</sup> <a name="LagDuration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lagDuration"></a>

```go
func LagDuration() *string
```

- *Type:* *string

---

##### `LastTransferBytes`<sup>Required</sup> <a name="LastTransferBytes" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes"></a>

```go
func LastTransferBytes() *string
```

- *Type:* *string

---

##### `LastTransferDuration`<sup>Required</sup> <a name="LastTransferDuration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration"></a>

```go
func LastTransferDuration() *string
```

- *Type:* *string

---

##### `LastTransferEndTime`<sup>Required</sup> <a name="LastTransferEndTime" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime"></a>

```go
func LastTransferEndTime() *string
```

- *Type:* *string

---

##### `LastTransferError`<sup>Required</sup> <a name="LastTransferError" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError"></a>

```go
func LastTransferError() *string
```

- *Type:* *string

---

##### `TotalTransferDuration`<sup>Required</sup> <a name="TotalTransferDuration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration"></a>

```go
func TotalTransferDuration() *string
```

- *Type:* *string

---

##### `TransferBytes`<sup>Required</sup> <a name="TransferBytes" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.transferBytes"></a>

```go
func TransferBytes() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeReplicationTransferStats
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats">GoogleNetappVolumeReplicationTransferStats</a>

---



