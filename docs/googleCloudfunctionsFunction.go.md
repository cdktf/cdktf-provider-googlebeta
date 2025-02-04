# `googleCloudfunctionsFunction` Submodule <a name="`googleCloudfunctionsFunction` Submodule" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudfunctionsFunction <a name="GoogleCloudfunctionsFunction" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function google_cloudfunctions_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunction(scope Construct, id *string, config GoogleCloudfunctionsFunctionConfig) GoogleCloudfunctionsFunction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig">GoogleCloudfunctionsFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig">GoogleCloudfunctionsFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger">PutEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables">PutSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes">PutSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository">PutSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetAvailableMemoryMb">ResetAvailableMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildEnvironmentVariables">ResetBuildEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildServiceAccount">ResetBuildServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildWorkerPool">ResetBuildWorkerPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRegistry">ResetDockerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRepository">ResetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEventTrigger">ResetEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerSecurityLevel">ResetHttpsTriggerSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerUrl">ResetHttpsTriggerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetIngressSettings">ResetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretEnvironmentVariables">ResetSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretVolumes">ResetSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveBucket">ResetSourceArchiveBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveObject">ResetSourceArchiveObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceRepository">ResetSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTriggerHttp">ResetTriggerHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnector">ResetVpcConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnectorEgressSettings">ResetVpcConnectorEgressSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventTrigger` <a name="PutEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger"></a>

```go
func PutEventTrigger(value GoogleCloudfunctionsFunctionEventTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---

##### `PutSecretEnvironmentVariables` <a name="PutSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables"></a>

```go
func PutSecretEnvironmentVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecretVolumes` <a name="PutSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes"></a>

```go
func PutSecretVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceRepository` <a name="PutSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository"></a>

```go
func PutSourceRepository(value GoogleCloudfunctionsFunctionSourceRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudfunctionsFunctionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

---

##### `ResetAvailableMemoryMb` <a name="ResetAvailableMemoryMb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetAvailableMemoryMb"></a>

```go
func ResetAvailableMemoryMb()
```

##### `ResetBuildEnvironmentVariables` <a name="ResetBuildEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildEnvironmentVariables"></a>

```go
func ResetBuildEnvironmentVariables()
```

##### `ResetBuildServiceAccount` <a name="ResetBuildServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildServiceAccount"></a>

```go
func ResetBuildServiceAccount()
```

##### `ResetBuildWorkerPool` <a name="ResetBuildWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildWorkerPool"></a>

```go
func ResetBuildWorkerPool()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDockerRegistry` <a name="ResetDockerRegistry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRegistry"></a>

```go
func ResetDockerRegistry()
```

##### `ResetDockerRepository` <a name="ResetDockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRepository"></a>

```go
func ResetDockerRepository()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEntryPoint"></a>

```go
func ResetEntryPoint()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetEventTrigger` <a name="ResetEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEventTrigger"></a>

```go
func ResetEventTrigger()
```

##### `ResetHttpsTriggerSecurityLevel` <a name="ResetHttpsTriggerSecurityLevel" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerSecurityLevel"></a>

```go
func ResetHttpsTriggerSecurityLevel()
```

##### `ResetHttpsTriggerUrl` <a name="ResetHttpsTriggerUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerUrl"></a>

```go
func ResetHttpsTriggerUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetId"></a>

```go
func ResetId()
```

##### `ResetIngressSettings` <a name="ResetIngressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetIngressSettings"></a>

```go
func ResetIngressSettings()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMaxInstances"></a>

```go
func ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecretEnvironmentVariables` <a name="ResetSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretEnvironmentVariables"></a>

```go
func ResetSecretEnvironmentVariables()
```

##### `ResetSecretVolumes` <a name="ResetSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretVolumes"></a>

```go
func ResetSecretVolumes()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSourceArchiveBucket` <a name="ResetSourceArchiveBucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveBucket"></a>

```go
func ResetSourceArchiveBucket()
```

##### `ResetSourceArchiveObject` <a name="ResetSourceArchiveObject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveObject"></a>

```go
func ResetSourceArchiveObject()
```

##### `ResetSourceRepository` <a name="ResetSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceRepository"></a>

```go
func ResetSourceRepository()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggerHttp` <a name="ResetTriggerHttp" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTriggerHttp"></a>

```go
func ResetTriggerHttp()
```

##### `ResetVpcConnector` <a name="ResetVpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnector"></a>

```go
func ResetVpcConnector()
```

##### `ResetVpcConnectorEgressSettings` <a name="ResetVpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnectorEgressSettings"></a>

```go
func ResetVpcConnectorEgressSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.GoogleCloudfunctionsFunction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.GoogleCloudfunctionsFunction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.GoogleCloudfunctionsFunction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.GoogleCloudfunctionsFunction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudfunctionsFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudfunctionsFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudfunctionsFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference">GoogleCloudfunctionsFunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumes">SecretVolumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList">GoogleCloudfunctionsFunctionSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepository">SourceRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference">GoogleCloudfunctionsFunctionSourceRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference">GoogleCloudfunctionsFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMbInput">AvailableMemoryMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariablesInput">BuildEnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccountInput">BuildServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPoolInput">BuildWorkerPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistryInput">DockerRegistryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepositoryInput">DockerRepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPointInput">EntryPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTriggerInput">EventTriggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevelInput">HttpsTriggerSecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrlInput">HttpsTriggerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettingsInput">IngressSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariablesInput">SecretEnvironmentVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumesInput">SecretVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucketInput">SourceArchiveBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObjectInput">SourceArchiveObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepositoryInput">SourceRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttpInput">TriggerHttpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettingsInput">VpcConnectorEgressSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorInput">VpcConnectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMb">AvailableMemoryMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariables">BuildEnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccount">BuildServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPool">BuildWorkerPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistry">DockerRegistry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepository">DockerRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel">HttpsTriggerSecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrl">HttpsTriggerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettings">IngressSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucket">SourceArchiveBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObject">SourceArchiveObject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttp">TriggerHttp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnector">VpcConnector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EventTrigger`<sup>Required</sup> <a name="EventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTrigger"></a>

```go
func EventTrigger() GoogleCloudfunctionsFunctionEventTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference">GoogleCloudfunctionsFunctionEventTriggerOutputReference</a>

---

##### `SecretEnvironmentVariables`<sup>Required</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariables"></a>

```go
func SecretEnvironmentVariables() GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a>

---

##### `SecretVolumes`<sup>Required</sup> <a name="SecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumes"></a>

```go
func SecretVolumes() GoogleCloudfunctionsFunctionSecretVolumesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList">GoogleCloudfunctionsFunctionSecretVolumesList</a>

---

##### `SourceRepository`<sup>Required</sup> <a name="SourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepository"></a>

```go
func SourceRepository() GoogleCloudfunctionsFunctionSourceRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference">GoogleCloudfunctionsFunctionSourceRepositoryOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeouts"></a>

```go
func Timeouts() GoogleCloudfunctionsFunctionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference">GoogleCloudfunctionsFunctionTimeoutsOutputReference</a>

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `AvailableMemoryMbInput`<sup>Optional</sup> <a name="AvailableMemoryMbInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMbInput"></a>

```go
func AvailableMemoryMbInput() *f64
```

- *Type:* *f64

---

##### `BuildEnvironmentVariablesInput`<sup>Optional</sup> <a name="BuildEnvironmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariablesInput"></a>

```go
func BuildEnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BuildServiceAccountInput`<sup>Optional</sup> <a name="BuildServiceAccountInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccountInput"></a>

```go
func BuildServiceAccountInput() *string
```

- *Type:* *string

---

##### `BuildWorkerPoolInput`<sup>Optional</sup> <a name="BuildWorkerPoolInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPoolInput"></a>

```go
func BuildWorkerPoolInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DockerRegistryInput`<sup>Optional</sup> <a name="DockerRegistryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistryInput"></a>

```go
func DockerRegistryInput() *string
```

- *Type:* *string

---

##### `DockerRepositoryInput`<sup>Optional</sup> <a name="DockerRepositoryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepositoryInput"></a>

```go
func DockerRepositoryInput() *string
```

- *Type:* *string

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPointInput"></a>

```go
func EntryPointInput() *string
```

- *Type:* *string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EventTriggerInput`<sup>Optional</sup> <a name="EventTriggerInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTriggerInput"></a>

```go
func EventTriggerInput() GoogleCloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---

##### `HttpsTriggerSecurityLevelInput`<sup>Optional</sup> <a name="HttpsTriggerSecurityLevelInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevelInput"></a>

```go
func HttpsTriggerSecurityLevelInput() *string
```

- *Type:* *string

---

##### `HttpsTriggerUrlInput`<sup>Optional</sup> <a name="HttpsTriggerUrlInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrlInput"></a>

```go
func HttpsTriggerUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressSettingsInput`<sup>Optional</sup> <a name="IngressSettingsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettingsInput"></a>

```go
func IngressSettingsInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `SecretEnvironmentVariablesInput`<sup>Optional</sup> <a name="SecretEnvironmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariablesInput"></a>

```go
func SecretEnvironmentVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `SecretVolumesInput`<sup>Optional</sup> <a name="SecretVolumesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumesInput"></a>

```go
func SecretVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SourceArchiveBucketInput`<sup>Optional</sup> <a name="SourceArchiveBucketInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucketInput"></a>

```go
func SourceArchiveBucketInput() *string
```

- *Type:* *string

---

##### `SourceArchiveObjectInput`<sup>Optional</sup> <a name="SourceArchiveObjectInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObjectInput"></a>

```go
func SourceArchiveObjectInput() *string
```

- *Type:* *string

---

##### `SourceRepositoryInput`<sup>Optional</sup> <a name="SourceRepositoryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepositoryInput"></a>

```go
func SourceRepositoryInput() GoogleCloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerHttpInput`<sup>Optional</sup> <a name="TriggerHttpInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttpInput"></a>

```go
func TriggerHttpInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConnectorEgressSettingsInput`<sup>Optional</sup> <a name="VpcConnectorEgressSettingsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettingsInput"></a>

```go
func VpcConnectorEgressSettingsInput() *string
```

- *Type:* *string

---

##### `VpcConnectorInput`<sup>Optional</sup> <a name="VpcConnectorInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorInput"></a>

```go
func VpcConnectorInput() *string
```

- *Type:* *string

---

##### `AvailableMemoryMb`<sup>Required</sup> <a name="AvailableMemoryMb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMb"></a>

```go
func AvailableMemoryMb() *f64
```

- *Type:* *f64

---

##### `BuildEnvironmentVariables`<sup>Required</sup> <a name="BuildEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariables"></a>

```go
func BuildEnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BuildServiceAccount`<sup>Required</sup> <a name="BuildServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccount"></a>

```go
func BuildServiceAccount() *string
```

- *Type:* *string

---

##### `BuildWorkerPool`<sup>Required</sup> <a name="BuildWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPool"></a>

```go
func BuildWorkerPool() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DockerRegistry`<sup>Required</sup> <a name="DockerRegistry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistry"></a>

```go
func DockerRegistry() *string
```

- *Type:* *string

---

##### `DockerRepository`<sup>Required</sup> <a name="DockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepository"></a>

```go
func DockerRepository() *string
```

- *Type:* *string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPoint"></a>

```go
func EntryPoint() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpsTriggerSecurityLevel`<sup>Required</sup> <a name="HttpsTriggerSecurityLevel" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel"></a>

```go
func HttpsTriggerSecurityLevel() *string
```

- *Type:* *string

---

##### `HttpsTriggerUrl`<sup>Required</sup> <a name="HttpsTriggerUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrl"></a>

```go
func HttpsTriggerUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngressSettings`<sup>Required</sup> <a name="IngressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettings"></a>

```go
func IngressSettings() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `SourceArchiveBucket`<sup>Required</sup> <a name="SourceArchiveBucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucket"></a>

```go
func SourceArchiveBucket() *string
```

- *Type:* *string

---

##### `SourceArchiveObject`<sup>Required</sup> <a name="SourceArchiveObject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObject"></a>

```go
func SourceArchiveObject() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `TriggerHttp`<sup>Required</sup> <a name="TriggerHttp" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttp"></a>

```go
func TriggerHttp() interface{}
```

- *Type:* interface{}

---

##### `VpcConnector`<sup>Required</sup> <a name="VpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnector"></a>

```go
func VpcConnector() *string
```

- *Type:* *string

---

##### `VpcConnectorEgressSettings`<sup>Required</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings"></a>

```go
func VpcConnectorEgressSettings() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudfunctionsFunctionConfig <a name="GoogleCloudfunctionsFunctionConfig" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

&googlecloudfunctionsfunction.GoogleCloudfunctionsFunctionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Runtime: *string,
	AvailableMemoryMb: *f64,
	BuildEnvironmentVariables: *map[string]*string,
	BuildServiceAccount: *string,
	BuildWorkerPool: *string,
	Description: *string,
	DockerRegistry: *string,
	DockerRepository: *string,
	EntryPoint: *string,
	EnvironmentVariables: *map[string]*string,
	EventTrigger: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger,
	HttpsTriggerSecurityLevel: *string,
	HttpsTriggerUrl: *string,
	Id: *string,
	IngressSettings: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	MaxInstances: *f64,
	MinInstances: *f64,
	Project: *string,
	Region: *string,
	SecretEnvironmentVariables: interface{},
	SecretVolumes: interface{},
	ServiceAccountEmail: *string,
	SourceArchiveBucket: *string,
	SourceArchiveObject: *string,
	SourceRepository: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository,
	Timeout: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts,
	TriggerHttp: interface{},
	VpcConnector: *string,
	VpcConnectorEgressSettings: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.name">Name</a></code> | <code>*string</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.runtime">Runtime</a></code> | <code>*string</code> | The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.availableMemoryMb">AvailableMemoryMb</a></code> | <code>*f64</code> | Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildEnvironmentVariables">BuildEnvironmentVariables</a></code> | <code>*map[string]*string</code> | A set of key/value environment variable pairs available during build time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildServiceAccount">BuildServiceAccount</a></code> | <code>*string</code> | The fully-qualified name of the service account to be used for the build step of deploying this function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildWorkerPool">BuildWorkerPool</a></code> | <code>*string</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.description">Description</a></code> | <code>*string</code> | Description of the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRegistry">DockerRegistry</a></code> | <code>*string</code> | Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRepository">DockerRepository</a></code> | <code>*string</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | Name of the function that will be executed when the Google Cloud Function is triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | A set of key/value environment variable pairs to assign to the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel">HttpsTriggerSecurityLevel</a></code> | <code>*string</code> | The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerUrl">HttpsTriggerUrl</a></code> | <code>*string</code> | URL which triggers function execution. Returned only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.ingressSettings">IngressSettings</a></code> | <code>*string</code> | String value that controls what traffic can reach the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.minInstances">MinInstances</a></code> | <code>*f64</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.project">Project</a></code> | <code>*string</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.region">Region</a></code> | <code>*string</code> | Region of function. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code>interface{}</code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretVolumes">SecretVolumes</a></code> | <code>interface{}</code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | If provided, the self-provided service account to run the function with. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveBucket">SourceArchiveBucket</a></code> | <code>*string</code> | The GCS bucket containing the zip archive which contains the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveObject">SourceArchiveObject</a></code> | <code>*string</code> | The source archive object (file) in archive bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceRepository">SourceRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | source_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.triggerHttp">TriggerHttp</a></code> | <code>interface{}</code> | Boolean variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnector">VpcConnector</a></code> | <code>*string</code> | The VPC Network Connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>*string</code> | The egress settings for the connector, controlling what traffic is diverted through it. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#name GoogleCloudfunctionsFunction#name}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#runtime GoogleCloudfunctionsFunction#runtime}

---

##### `AvailableMemoryMb`<sup>Optional</sup> <a name="AvailableMemoryMb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.availableMemoryMb"></a>

```go
AvailableMemoryMb *f64
```

- *Type:* *f64

Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#available_memory_mb GoogleCloudfunctionsFunction#available_memory_mb}

---

##### `BuildEnvironmentVariables`<sup>Optional</sup> <a name="BuildEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildEnvironmentVariables"></a>

```go
BuildEnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value environment variable pairs available during build time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#build_environment_variables GoogleCloudfunctionsFunction#build_environment_variables}

---

##### `BuildServiceAccount`<sup>Optional</sup> <a name="BuildServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildServiceAccount"></a>

```go
BuildServiceAccount *string
```

- *Type:* *string

The fully-qualified name of the service account to be used for the build step of deploying this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#build_service_account GoogleCloudfunctionsFunction#build_service_account}

---

##### `BuildWorkerPool`<sup>Optional</sup> <a name="BuildWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildWorkerPool"></a>

```go
BuildWorkerPool *string
```

- *Type:* *string

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#build_worker_pool GoogleCloudfunctionsFunction#build_worker_pool}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#description GoogleCloudfunctionsFunction#description}

---

##### `DockerRegistry`<sup>Optional</sup> <a name="DockerRegistry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRegistry"></a>

```go
DockerRegistry *string
```

- *Type:* *string

Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#docker_registry GoogleCloudfunctionsFunction#docker_registry}

---

##### `DockerRepository`<sup>Optional</sup> <a name="DockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRepository"></a>

```go
DockerRepository *string
```

- *Type:* *string

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

If specified, deployments will use Artifact Registry for storing images built with Cloud Build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#docker_repository GoogleCloudfunctionsFunction#docker_repository}

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.entryPoint"></a>

```go
EntryPoint *string
```

- *Type:* *string

Name of the function that will be executed when the Google Cloud Function is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#entry_point GoogleCloudfunctionsFunction#entry_point}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value environment variable pairs to assign to the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#environment_variables GoogleCloudfunctionsFunction#environment_variables}

---

##### `EventTrigger`<sup>Optional</sup> <a name="EventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.eventTrigger"></a>

```go
EventTrigger GoogleCloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#event_trigger GoogleCloudfunctionsFunction#event_trigger}

---

##### `HttpsTriggerSecurityLevel`<sup>Optional</sup> <a name="HttpsTriggerSecurityLevel" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel"></a>

```go
HttpsTriggerSecurityLevel *string
```

- *Type:* *string

The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#https_trigger_security_level GoogleCloudfunctionsFunction#https_trigger_security_level}

---

##### `HttpsTriggerUrl`<sup>Optional</sup> <a name="HttpsTriggerUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerUrl"></a>

```go
HttpsTriggerUrl *string
```

- *Type:* *string

URL which triggers function execution. Returned only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#https_trigger_url GoogleCloudfunctionsFunction#https_trigger_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressSettings`<sup>Optional</sup> <a name="IngressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.ingressSettings"></a>

```go
IngressSettings *string
```

- *Type:* *string

String value that controls what traffic can reach the function.

Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#ingress_settings GoogleCloudfunctionsFunction#ingress_settings}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#kms_key_name GoogleCloudfunctionsFunction#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#labels GoogleCloudfunctionsFunction#labels}

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#max_instances GoogleCloudfunctionsFunction#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#min_instances GoogleCloudfunctionsFunction#min_instances}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#project GoogleCloudfunctionsFunction#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#region GoogleCloudfunctionsFunction#region}

---

##### `SecretEnvironmentVariables`<sup>Optional</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretEnvironmentVariables"></a>

```go
SecretEnvironmentVariables interface{}
```

- *Type:* interface{}

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#secret_environment_variables GoogleCloudfunctionsFunction#secret_environment_variables}

---

##### `SecretVolumes`<sup>Optional</sup> <a name="SecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretVolumes"></a>

```go
SecretVolumes interface{}
```

- *Type:* interface{}

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#secret_volumes GoogleCloudfunctionsFunction#secret_volumes}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

If provided, the self-provided service account to run the function with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#service_account_email GoogleCloudfunctionsFunction#service_account_email}

---

##### `SourceArchiveBucket`<sup>Optional</sup> <a name="SourceArchiveBucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveBucket"></a>

```go
SourceArchiveBucket *string
```

- *Type:* *string

The GCS bucket containing the zip archive which contains the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#source_archive_bucket GoogleCloudfunctionsFunction#source_archive_bucket}

---

##### `SourceArchiveObject`<sup>Optional</sup> <a name="SourceArchiveObject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveObject"></a>

```go
SourceArchiveObject *string
```

- *Type:* *string

The source archive object (file) in archive bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#source_archive_object GoogleCloudfunctionsFunction#source_archive_object}

---

##### `SourceRepository`<sup>Optional</sup> <a name="SourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceRepository"></a>

```go
SourceRepository GoogleCloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

source_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#source_repository GoogleCloudfunctionsFunction#source_repository}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#timeout GoogleCloudfunctionsFunction#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudfunctionsFunctionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#timeouts GoogleCloudfunctionsFunction#timeouts}

---

##### `TriggerHttp`<sup>Optional</sup> <a name="TriggerHttp" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.triggerHttp"></a>

```go
TriggerHttp interface{}
```

- *Type:* interface{}

Boolean variable.

Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#trigger_http GoogleCloudfunctionsFunction#trigger_http}

---

##### `VpcConnector`<sup>Optional</sup> <a name="VpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnector"></a>

```go
VpcConnector *string
```

- *Type:* *string

The VPC Network Connector that this cloud function can connect to.

It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/* /locations/* /connectors/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#vpc_connector GoogleCloudfunctionsFunction#vpc_connector}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `VpcConnectorEgressSettings`<sup>Optional</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings"></a>

```go
VpcConnectorEgressSettings *string
```

- *Type:* *string

The egress settings for the connector, controlling what traffic is diverted through it.

Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#vpc_connector_egress_settings GoogleCloudfunctionsFunction#vpc_connector_egress_settings}

---

### GoogleCloudfunctionsFunctionEventTrigger <a name="GoogleCloudfunctionsFunctionEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

&googlecloudfunctionsfunction.GoogleCloudfunctionsFunctionEventTrigger {
	EventType: *string,
	Resource: *string,
	FailurePolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.eventType">EventType</a></code> | <code>*string</code> | The type of event to observe. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.resource">Resource</a></code> | <code>*string</code> | The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | failure_policy block. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

The type of event to observe.

For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#event_type GoogleCloudfunctionsFunction#event_type}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#resource GoogleCloudfunctionsFunction#resource}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.failurePolicy"></a>

```go
FailurePolicy GoogleCloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#failure_policy GoogleCloudfunctionsFunction#failure_policy}

---

### GoogleCloudfunctionsFunctionEventTriggerFailurePolicy <a name="GoogleCloudfunctionsFunctionEventTriggerFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

&googlecloudfunctionsfunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy {
	Retry: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.property.retry">Retry</a></code> | <code>interface{}</code> | Whether the function should be retried on failure. Defaults to false. |

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.property.retry"></a>

```go
Retry interface{}
```

- *Type:* interface{}

Whether the function should be retried on failure. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#retry GoogleCloudfunctionsFunction#retry}

---

### GoogleCloudfunctionsFunctionSecretEnvironmentVariables <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

&googlecloudfunctionsfunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables {
	Key: *string,
	Secret: *string,
	Version: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.key">Key</a></code> | <code>*string</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.secret">Secret</a></code> | <code>*string</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.version">Version</a></code> | <code>*string</code> | Version of the secret (version number or the string "latest"). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.projectId">ProjectId</a></code> | <code>*string</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#key GoogleCloudfunctionsFunction#key}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the secret (version number or the string "latest").

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new clones start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}

---

### GoogleCloudfunctionsFunctionSecretVolumes <a name="GoogleCloudfunctionsFunctionSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

&googlecloudfunctionsfunction.GoogleCloudfunctionsFunctionSecretVolumes {
	MountPath: *string,
	Secret: *string,
	ProjectId: *string,
	Versions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.mountPath">MountPath</a></code> | <code>*string</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.secret">Secret</a></code> | <code>*string</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.projectId">ProjectId</a></code> | <code>*string</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.versions">Versions</a></code> | <code>interface{}</code> | versions block. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

The path within the container to mount the secret volume.

For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#mount_path GoogleCloudfunctionsFunction#mount_path}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.versions"></a>

```go
Versions interface{}
```

- *Type:* interface{}

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#versions GoogleCloudfunctionsFunction#versions}

---

### GoogleCloudfunctionsFunctionSecretVolumesVersions <a name="GoogleCloudfunctionsFunctionSecretVolumesVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

&googlecloudfunctionsfunction.GoogleCloudfunctionsFunctionSecretVolumesVersions {
	Path: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.path">Path</a></code> | <code>*string</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.version">Version</a></code> | <code>*string</code> | Version of the secret (version number or the string "latest"). |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.path"></a>

```go
Path *string
```

- *Type:* *string

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mount_path as "/etc/secrets" and path as "/secret_foo" would mount the secret value file at "/etc/secrets/secret_foo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#path GoogleCloudfunctionsFunction#path}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the secret (version number or the string "latest").

It is preferable to use "latest" version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}

---

### GoogleCloudfunctionsFunctionSourceRepository <a name="GoogleCloudfunctionsFunctionSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

&googlecloudfunctionsfunction.GoogleCloudfunctionsFunctionSourceRepository {
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.property.url">Url</a></code> | <code>*string</code> | The URL pointing to the hosted repository where the function is defined. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL pointing to the hosted repository where the function is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#url GoogleCloudfunctionsFunction#url}

---

### GoogleCloudfunctionsFunctionTimeouts <a name="GoogleCloudfunctionsFunctionTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

&googlecloudfunctionsfunction.GoogleCloudfunctionsFunctionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference <a name="GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry">Retry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry"></a>

```go
func Retry() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---


### GoogleCloudfunctionsFunctionEventTriggerOutputReference <a name="GoogleCloudfunctionsFunctionEventTriggerOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionEventTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudfunctionsFunctionEventTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy">PutFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFailurePolicy` <a name="PutFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy"></a>

```go
func PutFailurePolicy(value GoogleCloudfunctionsFunctionEventTriggerFailurePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy"></a>

```go
func ResetFailurePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy"></a>

```go
func FailurePolicy() GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a>

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput"></a>

```go
func FailurePolicyInput() GoogleCloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---


### GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudfunctionsFunctionSecretVolumesList <a name="GoogleCloudfunctionsFunctionSecretVolumesList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionSecretVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudfunctionsFunctionSecretVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get"></a>

```go
func Get(index *f64) GoogleCloudfunctionsFunctionSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudfunctionsFunctionSecretVolumesOutputReference <a name="GoogleCloudfunctionsFunctionSecretVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionSecretVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudfunctionsFunctionSecretVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetVersions">ResetVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVersions` <a name="PutVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions"></a>

```go
func PutVersions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetVersions` <a name="ResetVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetVersions"></a>

```go
func ResetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList">GoogleCloudfunctionsFunctionSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput">VersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions"></a>

```go
func Versions() GoogleCloudfunctionsFunctionSecretVolumesVersionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList">GoogleCloudfunctionsFunctionSecretVolumesVersionsList</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput"></a>

```go
func VersionsInput() interface{}
```

- *Type:* interface{}

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudfunctionsFunctionSecretVolumesVersionsList <a name="GoogleCloudfunctionsFunctionSecretVolumesVersionsList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionSecretVolumesVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudfunctionsFunctionSecretVolumesVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get"></a>

```go
func Get(index *f64) GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference <a name="GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudfunctionsFunctionSourceRepositoryOutputReference <a name="GoogleCloudfunctionsFunctionSourceRepositoryOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionSourceRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudfunctionsFunctionSourceRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl">DeployedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployedUrl`<sup>Required</sup> <a name="DeployedUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl"></a>

```go
func DeployedUrl() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---


### GoogleCloudfunctionsFunctionTimeoutsOutputReference <a name="GoogleCloudfunctionsFunctionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudfunctionsfunction"

googlecloudfunctionsfunction.NewGoogleCloudfunctionsFunctionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudfunctionsFunctionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



