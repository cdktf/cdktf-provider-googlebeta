# `googleClouddeployTarget` Submodule <a name="`googleClouddeployTarget` Submodule" id="@cdktf/provider-google-beta.googleClouddeployTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployTarget <a name="GoogleClouddeployTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target google_clouddeploy_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.NewGoogleClouddeployTarget(scope Construct, id *string, config GoogleClouddeployTargetConfig) GoogleClouddeployTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig">GoogleClouddeployTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig">GoogleClouddeployTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster">PutAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putCustomTarget">PutCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs">PutExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke">PutGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget">PutMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun">PutRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnthosCluster">ResetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetCustomTarget">ResetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDeployParameters">ResetDeployParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetExecutionConfigs">ResetExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetGke">ResetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetMultiTarget">ResetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRequireApproval">ResetRequireApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRun">ResetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnthosCluster` <a name="PutAnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster"></a>

```go
func PutAnthosCluster(value GoogleClouddeployTargetAnthosCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---

##### `PutCustomTarget` <a name="PutCustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putCustomTarget"></a>

```go
func PutCustomTarget(value GoogleClouddeployTargetCustomTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putCustomTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

---

##### `PutExecutionConfigs` <a name="PutExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs"></a>

```go
func PutExecutionConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGke` <a name="PutGke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke"></a>

```go
func PutGke(value GoogleClouddeployTargetGke)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---

##### `PutMultiTarget` <a name="PutMultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget"></a>

```go
func PutMultiTarget(value GoogleClouddeployTargetMultiTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---

##### `PutRun` <a name="PutRun" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun"></a>

```go
func PutRun(value GoogleClouddeployTargetRun)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts"></a>

```go
func PutTimeouts(value GoogleClouddeployTargetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetAnthosCluster` <a name="ResetAnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnthosCluster"></a>

```go
func ResetAnthosCluster()
```

##### `ResetCustomTarget` <a name="ResetCustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetCustomTarget"></a>

```go
func ResetCustomTarget()
```

##### `ResetDeployParameters` <a name="ResetDeployParameters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDeployParameters"></a>

```go
func ResetDeployParameters()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExecutionConfigs` <a name="ResetExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetExecutionConfigs"></a>

```go
func ResetExecutionConfigs()
```

##### `ResetGke` <a name="ResetGke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetGke"></a>

```go
func ResetGke()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMultiTarget` <a name="ResetMultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetMultiTarget"></a>

```go
func ResetMultiTarget()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRequireApproval` <a name="ResetRequireApproval" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRequireApproval"></a>

```go
func ResetRequireApproval()
```

##### `ResetRun` <a name="ResetRun" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRun"></a>

```go
func ResetRun()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.GoogleClouddeployTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.GoogleClouddeployTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.GoogleClouddeployTarget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.GoogleClouddeployTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleClouddeployTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleClouddeployTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleClouddeployTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosCluster">AnthosCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference">GoogleClouddeployTargetAnthosClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTarget">CustomTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference">GoogleClouddeployTargetCustomTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigs">ExecutionConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList">GoogleClouddeployTargetExecutionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference">GoogleClouddeployTargetGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTarget">MultiTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference">GoogleClouddeployTargetMultiTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.run">Run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference">GoogleClouddeployTargetRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference">GoogleClouddeployTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosClusterInput">AnthosClusterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTargetInput">CustomTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParametersInput">DeployParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigsInput">ExecutionConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gkeInput">GkeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTargetInput">MultiTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApprovalInput">RequireApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.runInput">RunInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParameters">DeployParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApproval">RequireApproval</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnthosCluster`<sup>Required</sup> <a name="AnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosCluster"></a>

```go
func AnthosCluster() GoogleClouddeployTargetAnthosClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference">GoogleClouddeployTargetAnthosClusterOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomTarget`<sup>Required</sup> <a name="CustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTarget"></a>

```go
func CustomTarget() GoogleClouddeployTargetCustomTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference">GoogleClouddeployTargetCustomTargetOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExecutionConfigs`<sup>Required</sup> <a name="ExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigs"></a>

```go
func ExecutionConfigs() GoogleClouddeployTargetExecutionConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList">GoogleClouddeployTargetExecutionConfigsList</a>

---

##### `Gke`<sup>Required</sup> <a name="Gke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gke"></a>

```go
func Gke() GoogleClouddeployTargetGkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference">GoogleClouddeployTargetGkeOutputReference</a>

---

##### `MultiTarget`<sup>Required</sup> <a name="MultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTarget"></a>

```go
func MultiTarget() GoogleClouddeployTargetMultiTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference">GoogleClouddeployTargetMultiTargetOutputReference</a>

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.run"></a>

```go
func Run() GoogleClouddeployTargetRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference">GoogleClouddeployTargetRunOutputReference</a>

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeouts"></a>

```go
func Timeouts() GoogleClouddeployTargetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference">GoogleClouddeployTargetTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnthosClusterInput`<sup>Optional</sup> <a name="AnthosClusterInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosClusterInput"></a>

```go
func AnthosClusterInput() GoogleClouddeployTargetAnthosCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---

##### `CustomTargetInput`<sup>Optional</sup> <a name="CustomTargetInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTargetInput"></a>

```go
func CustomTargetInput() GoogleClouddeployTargetCustomTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

---

##### `DeployParametersInput`<sup>Optional</sup> <a name="DeployParametersInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParametersInput"></a>

```go
func DeployParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExecutionConfigsInput`<sup>Optional</sup> <a name="ExecutionConfigsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigsInput"></a>

```go
func ExecutionConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `GkeInput`<sup>Optional</sup> <a name="GkeInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gkeInput"></a>

```go
func GkeInput() GoogleClouddeployTargetGke
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MultiTargetInput`<sup>Optional</sup> <a name="MultiTargetInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTargetInput"></a>

```go
func MultiTargetInput() GoogleClouddeployTargetMultiTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RequireApprovalInput`<sup>Optional</sup> <a name="RequireApprovalInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApprovalInput"></a>

```go
func RequireApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `RunInput`<sup>Optional</sup> <a name="RunInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.runInput"></a>

```go
func RunInput() GoogleClouddeployTargetRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeployParameters`<sup>Required</sup> <a name="DeployParameters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParameters"></a>

```go
func DeployParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RequireApproval`<sup>Required</sup> <a name="RequireApproval" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApproval"></a>

```go
func RequireApproval() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployTargetAnthosCluster <a name="GoogleClouddeployTargetAnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

&googleclouddeploytarget.GoogleClouddeployTargetAnthosCluster {
	Membership: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.property.membership">Membership</a></code> | <code>*string</code> | Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `Membership`<sup>Optional</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.property.membership"></a>

```go
Membership *string
```

- *Type:* *string

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#membership GoogleClouddeployTarget#membership}

---

### GoogleClouddeployTargetConfig <a name="GoogleClouddeployTargetConfig" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

&googleclouddeploytarget.GoogleClouddeployTargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Annotations: *map[string]*string,
	AnthosCluster: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster,
	CustomTarget: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget,
	DeployParameters: *map[string]*string,
	Description: *string,
	ExecutionConfigs: interface{},
	Gke: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleClouddeployTarget.GoogleClouddeployTargetGke,
	Id: *string,
	Labels: *map[string]*string,
	MultiTarget: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget,
	Project: *string,
	RequireApproval: interface{},
	Run: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleClouddeployTarget.GoogleClouddeployTargetRun,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleClouddeployTarget.GoogleClouddeployTargetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.name">Name</a></code> | <code>*string</code> | Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.anthosCluster">AnthosCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.customTarget">CustomTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a></code> | custom_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.deployParameters">DeployParameters</a></code> | <code>*map[string]*string</code> | Optional. The deploy parameters to use for this target. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.executionConfigs">ExecutionConfigs</a></code> | <code>interface{}</code> | execution_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#id GoogleClouddeployTarget#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.multiTarget">MultiTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | multi_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.requireApproval">RequireApproval</a></code> | <code>interface{}</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.run">Run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#location GoogleClouddeployTarget#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#name GoogleClouddeployTarget#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#annotations GoogleClouddeployTarget#annotations}

---

##### `AnthosCluster`<sup>Optional</sup> <a name="AnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.anthosCluster"></a>

```go
AnthosCluster GoogleClouddeployTargetAnthosCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#anthos_cluster GoogleClouddeployTarget#anthos_cluster}

---

##### `CustomTarget`<sup>Optional</sup> <a name="CustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.customTarget"></a>

```go
CustomTarget GoogleClouddeployTargetCustomTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

custom_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#custom_target GoogleClouddeployTarget#custom_target}

---

##### `DeployParameters`<sup>Optional</sup> <a name="DeployParameters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.deployParameters"></a>

```go
DeployParameters *map[string]*string
```

- *Type:* *map[string]*string

Optional. The deploy parameters to use for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#deploy_parameters GoogleClouddeployTarget#deploy_parameters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#description GoogleClouddeployTarget#description}

---

##### `ExecutionConfigs`<sup>Optional</sup> <a name="ExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.executionConfigs"></a>

```go
ExecutionConfigs interface{}
```

- *Type:* interface{}

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#execution_configs GoogleClouddeployTarget#execution_configs}

---

##### `Gke`<sup>Optional</sup> <a name="Gke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.gke"></a>

```go
Gke GoogleClouddeployTargetGke
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#gke GoogleClouddeployTarget#gke}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#id GoogleClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#labels GoogleClouddeployTarget#labels}

---

##### `MultiTarget`<sup>Optional</sup> <a name="MultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.multiTarget"></a>

```go
MultiTarget GoogleClouddeployTargetMultiTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

multi_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#multi_target GoogleClouddeployTarget#multi_target}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#project GoogleClouddeployTarget#project}

---

##### `RequireApproval`<sup>Optional</sup> <a name="RequireApproval" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.requireApproval"></a>

```go
RequireApproval interface{}
```

- *Type:* interface{}

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#require_approval GoogleClouddeployTarget#require_approval}

---

##### `Run`<sup>Optional</sup> <a name="Run" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.run"></a>

```go
Run GoogleClouddeployTargetRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#run GoogleClouddeployTarget#run}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.timeouts"></a>

```go
Timeouts GoogleClouddeployTargetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#timeouts GoogleClouddeployTarget#timeouts}

---

### GoogleClouddeployTargetCustomTarget <a name="GoogleClouddeployTargetCustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

&googleclouddeploytarget.GoogleClouddeployTargetCustomTarget {
	CustomTargetType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget.property.customTargetType">CustomTargetType</a></code> | <code>*string</code> | Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`. |

---

##### `CustomTargetType`<sup>Required</sup> <a name="CustomTargetType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget.property.customTargetType"></a>

```go
CustomTargetType *string
```

- *Type:* *string

Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#custom_target_type GoogleClouddeployTarget#custom_target_type}

---

### GoogleClouddeployTargetExecutionConfigs <a name="GoogleClouddeployTargetExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

&googleclouddeploytarget.GoogleClouddeployTargetExecutionConfigs {
	Usages: *[]*string,
	ArtifactStorage: *string,
	ExecutionTimeout: *string,
	ServiceAccount: *string,
	Verbose: interface{},
	WorkerPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.usages">Usages</a></code> | <code>*[]*string</code> | Required. Usages when this configuration should be applied. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.artifactStorage">ArtifactStorage</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.verbose">Verbose</a></code> | <code>interface{}</code> | Optional. If true, additional logging will be enabled when running builds in this execution environment. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.workerPool">WorkerPool</a></code> | <code>*string</code> | Optional. |

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.usages"></a>

```go
Usages *[]*string
```

- *Type:* *[]*string

Required. Usages when this configuration should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#usages GoogleClouddeployTarget#usages}

---

##### `ArtifactStorage`<sup>Optional</sup> <a name="ArtifactStorage" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.artifactStorage"></a>

```go
ArtifactStorage *string
```

- *Type:* *string

Optional.

Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#artifact_storage GoogleClouddeployTarget#artifact_storage}

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.executionTimeout"></a>

```go
ExecutionTimeout *string
```

- *Type:* *string

Optional.

Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#execution_timeout GoogleClouddeployTarget#execution_timeout}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#service_account GoogleClouddeployTarget#service_account}

---

##### `Verbose`<sup>Optional</sup> <a name="Verbose" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.verbose"></a>

```go
Verbose interface{}
```

- *Type:* interface{}

Optional. If true, additional logging will be enabled when running builds in this execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#verbose GoogleClouddeployTarget#verbose}

---

##### `WorkerPool`<sup>Optional</sup> <a name="WorkerPool" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.workerPool"></a>

```go
WorkerPool *string
```

- *Type:* *string

Optional.

The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#worker_pool GoogleClouddeployTarget#worker_pool}

---

### GoogleClouddeployTargetGke <a name="GoogleClouddeployTargetGke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

&googleclouddeploytarget.GoogleClouddeployTargetGke {
	Cluster: *string,
	InternalIp: interface{},
	ProxyUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.cluster">Cluster</a></code> | <code>*string</code> | Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.internalIp">InternalIp</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.proxyUrl">ProxyUrl</a></code> | <code>*string</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#cluster GoogleClouddeployTarget#cluster}

---

##### `InternalIp`<sup>Optional</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.internalIp"></a>

```go
InternalIp interface{}
```

- *Type:* interface{}

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#internal_ip GoogleClouddeployTarget#internal_ip}

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.proxyUrl"></a>

```go
ProxyUrl *string
```

- *Type:* *string

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#proxy_url GoogleClouddeployTarget#proxy_url}

---

### GoogleClouddeployTargetMultiTarget <a name="GoogleClouddeployTargetMultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

&googleclouddeploytarget.GoogleClouddeployTargetMultiTarget {
	TargetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | Required. The target_ids of this multiTarget. |

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.property.targetIds"></a>

```go
TargetIds *[]*string
```

- *Type:* *[]*string

Required. The target_ids of this multiTarget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#target_ids GoogleClouddeployTarget#target_ids}

---

### GoogleClouddeployTargetRun <a name="GoogleClouddeployTargetRun" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

&googleclouddeploytarget.GoogleClouddeployTargetRun {
	Location: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.property.location">Location</a></code> | <code>*string</code> | Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.property.location"></a>

```go
Location *string
```

- *Type:* *string

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#location GoogleClouddeployTarget#location}

---

### GoogleClouddeployTargetTimeouts <a name="GoogleClouddeployTargetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

&googleclouddeploytarget.GoogleClouddeployTargetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#create GoogleClouddeployTarget#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#delete GoogleClouddeployTarget#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#update GoogleClouddeployTarget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#create GoogleClouddeployTarget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#delete GoogleClouddeployTarget#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_clouddeploy_target#update GoogleClouddeployTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployTargetAnthosClusterOutputReference <a name="GoogleClouddeployTargetAnthosClusterOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.NewGoogleClouddeployTargetAnthosClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployTargetAnthosClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resetMembership">ResetMembership</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMembership` <a name="ResetMembership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resetMembership"></a>

```go
func ResetMembership()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membershipInput">MembershipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membership">Membership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MembershipInput`<sup>Optional</sup> <a name="MembershipInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membershipInput"></a>

```go
func MembershipInput() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membership"></a>

```go
func Membership() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployTargetAnthosCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---


### GoogleClouddeployTargetCustomTargetOutputReference <a name="GoogleClouddeployTargetCustomTargetOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.NewGoogleClouddeployTargetCustomTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployTargetCustomTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput">CustomTargetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetType">CustomTargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomTargetTypeInput`<sup>Optional</sup> <a name="CustomTargetTypeInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput"></a>

```go
func CustomTargetTypeInput() *string
```

- *Type:* *string

---

##### `CustomTargetType`<sup>Required</sup> <a name="CustomTargetType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetType"></a>

```go
func CustomTargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployTargetCustomTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

---


### GoogleClouddeployTargetExecutionConfigsList <a name="GoogleClouddeployTargetExecutionConfigsList" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.NewGoogleClouddeployTargetExecutionConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleClouddeployTargetExecutionConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get"></a>

```go
func Get(index *f64) GoogleClouddeployTargetExecutionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleClouddeployTargetExecutionConfigsOutputReference <a name="GoogleClouddeployTargetExecutionConfigsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.NewGoogleClouddeployTargetExecutionConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleClouddeployTargetExecutionConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage">ResetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetVerbose">ResetVerbose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool">ResetWorkerPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactStorage` <a name="ResetArtifactStorage" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage"></a>

```go
func ResetArtifactStorage()
```

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout"></a>

```go
func ResetExecutionTimeout()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetVerbose` <a name="ResetVerbose" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetVerbose"></a>

```go
func ResetVerbose()
```

##### `ResetWorkerPool` <a name="ResetWorkerPool" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool"></a>

```go
func ResetWorkerPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput">ArtifactStorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usagesInput">UsagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verboseInput">VerboseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput">WorkerPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage">ArtifactStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usages">Usages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verbose">Verbose</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPool">WorkerPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactStorageInput`<sup>Optional</sup> <a name="ArtifactStorageInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput"></a>

```go
func ArtifactStorageInput() *string
```

- *Type:* *string

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput"></a>

```go
func ExecutionTimeoutInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usagesInput"></a>

```go
func UsagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VerboseInput`<sup>Optional</sup> <a name="VerboseInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verboseInput"></a>

```go
func VerboseInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerPoolInput`<sup>Optional</sup> <a name="WorkerPoolInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput"></a>

```go
func WorkerPoolInput() *string
```

- *Type:* *string

---

##### `ArtifactStorage`<sup>Required</sup> <a name="ArtifactStorage" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage"></a>

```go
func ArtifactStorage() *string
```

- *Type:* *string

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout"></a>

```go
func ExecutionTimeout() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usages"></a>

```go
func Usages() *[]*string
```

- *Type:* *[]*string

---

##### `Verbose`<sup>Required</sup> <a name="Verbose" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verbose"></a>

```go
func Verbose() interface{}
```

- *Type:* interface{}

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPool"></a>

```go
func WorkerPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleClouddeployTargetGkeOutputReference <a name="GoogleClouddeployTargetGkeOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.NewGoogleClouddeployTargetGkeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployTargetGkeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetInternalIp">ResetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetProxyUrl">ResetProxyUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetCluster"></a>

```go
func ResetCluster()
```

##### `ResetInternalIp` <a name="ResetInternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetInternalIp"></a>

```go
func ResetInternalIp()
```

##### `ResetProxyUrl` <a name="ResetProxyUrl" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetProxyUrl"></a>

```go
func ResetProxyUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIpInput">InternalIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrlInput">ProxyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIp">InternalIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrl">ProxyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `InternalIpInput`<sup>Optional</sup> <a name="InternalIpInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIpInput"></a>

```go
func InternalIpInput() interface{}
```

- *Type:* interface{}

---

##### `ProxyUrlInput`<sup>Optional</sup> <a name="ProxyUrlInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrlInput"></a>

```go
func ProxyUrlInput() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIp"></a>

```go
func InternalIp() interface{}
```

- *Type:* interface{}

---

##### `ProxyUrl`<sup>Required</sup> <a name="ProxyUrl" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrl"></a>

```go
func ProxyUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployTargetGke
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---


### GoogleClouddeployTargetMultiTargetOutputReference <a name="GoogleClouddeployTargetMultiTargetOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.NewGoogleClouddeployTargetMultiTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployTargetMultiTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIdsInput">TargetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetIdsInput`<sup>Optional</sup> <a name="TargetIdsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIdsInput"></a>

```go
func TargetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIds"></a>

```go
func TargetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployTargetMultiTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---


### GoogleClouddeployTargetRunOutputReference <a name="GoogleClouddeployTargetRunOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.NewGoogleClouddeployTargetRunOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployTargetRunOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployTargetRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---


### GoogleClouddeployTargetTimeoutsOutputReference <a name="GoogleClouddeployTargetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleclouddeploytarget"

googleclouddeploytarget.NewGoogleClouddeployTargetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployTargetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



