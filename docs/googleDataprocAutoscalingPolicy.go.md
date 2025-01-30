# `googleDataprocAutoscalingPolicy` Submodule <a name="`googleDataprocAutoscalingPolicy` Submodule" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocAutoscalingPolicy <a name="GoogleDataprocAutoscalingPolicy" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy google_dataproc_autoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.NewGoogleDataprocAutoscalingPolicy(scope Construct, id *string, config GoogleDataprocAutoscalingPolicyConfig) GoogleDataprocAutoscalingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig">GoogleDataprocAutoscalingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig">GoogleDataprocAutoscalingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm">PutBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig">PutSecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig">PutWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetBasicAlgorithm">ResetBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetSecondaryWorkerConfig">ResetSecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetWorkerConfig">ResetWorkerConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBasicAlgorithm` <a name="PutBasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm"></a>

```go
func PutBasicAlgorithm(value GoogleDataprocAutoscalingPolicyBasicAlgorithm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `PutSecondaryWorkerConfig` <a name="PutSecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig"></a>

```go
func PutSecondaryWorkerConfig(value GoogleDataprocAutoscalingPolicySecondaryWorkerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataprocAutoscalingPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>

---

##### `PutWorkerConfig` <a name="PutWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig"></a>

```go
func PutWorkerConfig(value GoogleDataprocAutoscalingPolicyWorkerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

---

##### `ResetBasicAlgorithm` <a name="ResetBasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetBasicAlgorithm"></a>

```go
func ResetBasicAlgorithm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSecondaryWorkerConfig` <a name="ResetSecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetSecondaryWorkerConfig"></a>

```go
func ResetSecondaryWorkerConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkerConfig` <a name="ResetWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetWorkerConfig"></a>

```go
func ResetWorkerConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocAutoscalingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataprocAutoscalingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataprocAutoscalingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataprocAutoscalingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocAutoscalingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithm">BasicAlgorithm</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfig">SecondaryWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference">GoogleDataprocAutoscalingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithmInput">BasicAlgorithmInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfigInput">SecondaryWorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfigInput">WorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BasicAlgorithm`<sup>Required</sup> <a name="BasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithm"></a>

```go
func BasicAlgorithm() GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecondaryWorkerConfig`<sup>Required</sup> <a name="SecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfig"></a>

```go
func SecondaryWorkerConfig() GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleDataprocAutoscalingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference">GoogleDataprocAutoscalingPolicyTimeoutsOutputReference</a>

---

##### `WorkerConfig`<sup>Required</sup> <a name="WorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfig"></a>

```go
func WorkerConfig() GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference</a>

---

##### `BasicAlgorithmInput`<sup>Optional</sup> <a name="BasicAlgorithmInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithmInput"></a>

```go
func BasicAlgorithmInput() GoogleDataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecondaryWorkerConfigInput`<sup>Optional</sup> <a name="SecondaryWorkerConfigInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfigInput"></a>

```go
func SecondaryWorkerConfigInput() GoogleDataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerConfigInput`<sup>Optional</sup> <a name="WorkerConfigInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfigInput"></a>

```go
func WorkerConfigInput() GoogleDataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocAutoscalingPolicyBasicAlgorithm <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

&googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm {
	YarnConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig,
	CooldownPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig">YarnConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | yarn_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*string</code> | Duration between scaling events. A scaling period starts after the update operation from the previous event has completed. |

---

##### `YarnConfig`<sup>Required</sup> <a name="YarnConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig"></a>

```go
YarnConfig GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

yarn_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#yarn_config GoogleDataprocAutoscalingPolicy#yarn_config}

---

##### `CooldownPeriod`<sup>Optional</sup> <a name="CooldownPeriod" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod"></a>

```go
CooldownPeriod *string
```

- *Type:* *string

Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#cooldown_period GoogleDataprocAutoscalingPolicy#cooldown_period}

---

### GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

&googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig {
	GracefulDecommissionTimeout: *string,
	ScaleDownFactor: *f64,
	ScaleUpFactor: *f64,
	ScaleDownMinWorkerFraction: *f64,
	ScaleUpMinWorkerFraction: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout">GracefulDecommissionTimeout</a></code> | <code>*string</code> | Timeout for YARN graceful decommissioning of Node Managers. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor">ScaleDownFactor</a></code> | <code>*f64</code> | Fraction of average pending memory in the last cooldown period for which to remove workers. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor">ScaleUpFactor</a></code> | <code>*f64</code> | Fraction of average pending memory in the last cooldown period for which to add workers. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction">ScaleDownMinWorkerFraction</a></code> | <code>*f64</code> | Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction">ScaleUpMinWorkerFraction</a></code> | <code>*f64</code> | Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. |

---

##### `GracefulDecommissionTimeout`<sup>Required</sup> <a name="GracefulDecommissionTimeout" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout"></a>

```go
GracefulDecommissionTimeout *string
```

- *Type:* *string

Timeout for YARN graceful decommissioning of Node Managers.

Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#graceful_decommission_timeout GoogleDataprocAutoscalingPolicy#graceful_decommission_timeout}

---

##### `ScaleDownFactor`<sup>Required</sup> <a name="ScaleDownFactor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor"></a>

```go
ScaleDownFactor *f64
```

- *Type:* *f64

Fraction of average pending memory in the last cooldown period for which to remove workers.

A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_down_factor GoogleDataprocAutoscalingPolicy#scale_down_factor}

---

##### `ScaleUpFactor`<sup>Required</sup> <a name="ScaleUpFactor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor"></a>

```go
ScaleUpFactor *f64
```

- *Type:* *f64

Fraction of average pending memory in the last cooldown period for which to add workers.

A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_up_factor GoogleDataprocAutoscalingPolicy#scale_up_factor}

---

##### `ScaleDownMinWorkerFraction`<sup>Optional</sup> <a name="ScaleDownMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction"></a>

```go
ScaleDownMinWorkerFraction *f64
```

- *Type:* *f64

Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_down_min_worker_fraction GoogleDataprocAutoscalingPolicy#scale_down_min_worker_fraction}

---

##### `ScaleUpMinWorkerFraction`<sup>Optional</sup> <a name="ScaleUpMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction"></a>

```go
ScaleUpMinWorkerFraction *f64
```

- *Type:* *f64

Minimum scale-up threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_up_min_worker_fraction GoogleDataprocAutoscalingPolicy#scale_up_min_worker_fraction}

---

### GoogleDataprocAutoscalingPolicyConfig <a name="GoogleDataprocAutoscalingPolicyConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

&googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyId: *string,
	BasicAlgorithm: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm,
	Id: *string,
	Location: *string,
	Project: *string,
	SecondaryWorkerConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts,
	WorkerConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | The policy id. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.basicAlgorithm">BasicAlgorithm</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | basic_algorithm block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#id GoogleDataprocAutoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The  location where the autoscaling policy should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#project GoogleDataprocAutoscalingPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig">SecondaryWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | secondary_worker_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | worker_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

The policy id.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#policy_id GoogleDataprocAutoscalingPolicy#policy_id}

---

##### `BasicAlgorithm`<sup>Optional</sup> <a name="BasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.basicAlgorithm"></a>

```go
BasicAlgorithm GoogleDataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

basic_algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#basic_algorithm GoogleDataprocAutoscalingPolicy#basic_algorithm}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#id GoogleDataprocAutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The  location where the autoscaling policy should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#location GoogleDataprocAutoscalingPolicy#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#project GoogleDataprocAutoscalingPolicy#project}.

---

##### `SecondaryWorkerConfig`<sup>Optional</sup> <a name="SecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig"></a>

```go
SecondaryWorkerConfig GoogleDataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

secondary_worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#secondary_worker_config GoogleDataprocAutoscalingPolicy#secondary_worker_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleDataprocAutoscalingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#timeouts GoogleDataprocAutoscalingPolicy#timeouts}

---

##### `WorkerConfig`<sup>Optional</sup> <a name="WorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.workerConfig"></a>

```go
WorkerConfig GoogleDataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#worker_config GoogleDataprocAutoscalingPolicy#worker_config}

---

### GoogleDataprocAutoscalingPolicySecondaryWorkerConfig <a name="GoogleDataprocAutoscalingPolicySecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

&googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig {
	MaxInstances: *f64,
	MinInstances: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances">MinInstances</a></code> | <code>*f64</code> | Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.weight">Weight</a></code> | <code>*f64</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

Maximum number of instances for this group.

Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#max_instances GoogleDataprocAutoscalingPolicy#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#min_instances GoogleDataprocAutoscalingPolicy#min_instances}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#weight GoogleDataprocAutoscalingPolicy#weight}

---

### GoogleDataprocAutoscalingPolicyTimeouts <a name="GoogleDataprocAutoscalingPolicyTimeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

&googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#create GoogleDataprocAutoscalingPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#delete GoogleDataprocAutoscalingPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#update GoogleDataprocAutoscalingPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#create GoogleDataprocAutoscalingPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#delete GoogleDataprocAutoscalingPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#update GoogleDataprocAutoscalingPolicy#update}.

---

### GoogleDataprocAutoscalingPolicyWorkerConfig <a name="GoogleDataprocAutoscalingPolicyWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

&googledataprocautoscalingpolicy.GoogleDataprocAutoscalingPolicyWorkerConfig {
	MaxInstances: *f64,
	MinInstances: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.minInstances">MinInstances</a></code> | <code>*f64</code> | Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.weight">Weight</a></code> | <code>*f64</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

Maximum number of instances for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#max_instances GoogleDataprocAutoscalingPolicy#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#min_instances GoogleDataprocAutoscalingPolicy#min_instances}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#weight GoogleDataprocAutoscalingPolicy#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.NewGoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig">PutYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod">ResetCooldownPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutYarnConfig` <a name="PutYarnConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig"></a>

```go
func PutYarnConfig(value GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `ResetCooldownPeriod` <a name="ResetCooldownPeriod" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod"></a>

```go
func ResetCooldownPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig">YarnConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput">CooldownPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput">YarnConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `YarnConfig`<sup>Required</sup> <a name="YarnConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig"></a>

```go
func YarnConfig() GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a>

---

##### `CooldownPeriodInput`<sup>Optional</sup> <a name="CooldownPeriodInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput"></a>

```go
func CooldownPeriodInput() *string
```

- *Type:* *string

---

##### `YarnConfigInput`<sup>Optional</sup> <a name="YarnConfigInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput"></a>

```go
func YarnConfigInput() GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod"></a>

```go
func CooldownPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

---


### GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.NewGoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction">ResetScaleDownMinWorkerFraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction">ResetScaleUpMinWorkerFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScaleDownMinWorkerFraction` <a name="ResetScaleDownMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction"></a>

```go
func ResetScaleDownMinWorkerFraction()
```

##### `ResetScaleUpMinWorkerFraction` <a name="ResetScaleUpMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction"></a>

```go
func ResetScaleUpMinWorkerFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput">GracefulDecommissionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput">ScaleDownFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput">ScaleDownMinWorkerFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput">ScaleUpFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput">ScaleUpMinWorkerFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout">GracefulDecommissionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor">ScaleDownFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction">ScaleDownMinWorkerFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor">ScaleUpFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction">ScaleUpMinWorkerFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GracefulDecommissionTimeoutInput`<sup>Optional</sup> <a name="GracefulDecommissionTimeoutInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput"></a>

```go
func GracefulDecommissionTimeoutInput() *string
```

- *Type:* *string

---

##### `ScaleDownFactorInput`<sup>Optional</sup> <a name="ScaleDownFactorInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput"></a>

```go
func ScaleDownFactorInput() *f64
```

- *Type:* *f64

---

##### `ScaleDownMinWorkerFractionInput`<sup>Optional</sup> <a name="ScaleDownMinWorkerFractionInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput"></a>

```go
func ScaleDownMinWorkerFractionInput() *f64
```

- *Type:* *f64

---

##### `ScaleUpFactorInput`<sup>Optional</sup> <a name="ScaleUpFactorInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput"></a>

```go
func ScaleUpFactorInput() *f64
```

- *Type:* *f64

---

##### `ScaleUpMinWorkerFractionInput`<sup>Optional</sup> <a name="ScaleUpMinWorkerFractionInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput"></a>

```go
func ScaleUpMinWorkerFractionInput() *f64
```

- *Type:* *f64

---

##### `GracefulDecommissionTimeout`<sup>Required</sup> <a name="GracefulDecommissionTimeout" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout"></a>

```go
func GracefulDecommissionTimeout() *string
```

- *Type:* *string

---

##### `ScaleDownFactor`<sup>Required</sup> <a name="ScaleDownFactor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor"></a>

```go
func ScaleDownFactor() *f64
```

- *Type:* *f64

---

##### `ScaleDownMinWorkerFraction`<sup>Required</sup> <a name="ScaleDownMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction"></a>

```go
func ScaleDownMinWorkerFraction() *f64
```

- *Type:* *f64

---

##### `ScaleUpFactor`<sup>Required</sup> <a name="ScaleUpFactor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor"></a>

```go
func ScaleUpFactor() *f64
```

- *Type:* *f64

---

##### `ScaleUpMinWorkerFraction`<sup>Required</sup> <a name="ScaleUpMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction"></a>

```go
func ScaleUpMinWorkerFraction() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---


### GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference <a name="GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.NewGoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances"></a>

```go
func ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

---


### GoogleDataprocAutoscalingPolicyTimeoutsOutputReference <a name="GoogleDataprocAutoscalingPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.NewGoogleDataprocAutoscalingPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocAutoscalingPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference <a name="GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledataprocautoscalingpolicy"

googledataprocautoscalingpolicy.NewGoogleDataprocAutoscalingPolicyWorkerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

---



