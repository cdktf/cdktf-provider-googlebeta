# `googleComputeHealthCheck` Submodule <a name="`googleComputeHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeHealthCheck <a name="GoogleComputeHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check google_compute_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.NewGoogleComputeHealthCheck(scope Construct, id *string, config GoogleComputeHealthCheckConfig) GoogleComputeHealthCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig">GoogleComputeHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig">GoogleComputeHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putGrpcHealthCheck">PutGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttp2HealthCheck">PutHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpHealthCheck">PutHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpsHealthCheck">PutHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putSslHealthCheck">PutSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTcpHealthCheck">PutTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetCheckIntervalSec">ResetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetGrpcHealthCheck">ResetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttp2HealthCheck">ResetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpHealthCheck">ResetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpsHealthCheck">ResetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSourceRegions">ResetSourceRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSslHealthCheck">ResetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTcpHealthCheck">ResetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGrpcHealthCheck` <a name="PutGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putGrpcHealthCheck"></a>

```go
func PutGrpcHealthCheck(value GoogleComputeHealthCheckGrpcHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

---

##### `PutHttp2HealthCheck` <a name="PutHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttp2HealthCheck"></a>

```go
func PutHttp2HealthCheck(value GoogleComputeHealthCheckHttp2HealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

---

##### `PutHttpHealthCheck` <a name="PutHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpHealthCheck"></a>

```go
func PutHttpHealthCheck(value GoogleComputeHealthCheckHttpHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

---

##### `PutHttpsHealthCheck` <a name="PutHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpsHealthCheck"></a>

```go
func PutHttpsHealthCheck(value GoogleComputeHealthCheckHttpsHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putLogConfig"></a>

```go
func PutLogConfig(value GoogleComputeHealthCheckLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

---

##### `PutSslHealthCheck` <a name="PutSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putSslHealthCheck"></a>

```go
func PutSslHealthCheck(value GoogleComputeHealthCheckSslHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

---

##### `PutTcpHealthCheck` <a name="PutTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTcpHealthCheck"></a>

```go
func PutTcpHealthCheck(value GoogleComputeHealthCheckTcpHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeHealthCheckTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a>

---

##### `ResetCheckIntervalSec` <a name="ResetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetCheckIntervalSec"></a>

```go
func ResetCheckIntervalSec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGrpcHealthCheck` <a name="ResetGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetGrpcHealthCheck"></a>

```go
func ResetGrpcHealthCheck()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetHttp2HealthCheck` <a name="ResetHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttp2HealthCheck"></a>

```go
func ResetHttp2HealthCheck()
```

##### `ResetHttpHealthCheck` <a name="ResetHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpHealthCheck"></a>

```go
func ResetHttpHealthCheck()
```

##### `ResetHttpsHealthCheck` <a name="ResetHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpsHealthCheck"></a>

```go
func ResetHttpsHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetId"></a>

```go
func ResetId()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSourceRegions` <a name="ResetSourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSourceRegions"></a>

```go
func ResetSourceRegions()
```

##### `ResetSslHealthCheck` <a name="ResetSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSslHealthCheck"></a>

```go
func ResetSslHealthCheck()
```

##### `ResetTcpHealthCheck` <a name="ResetTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTcpHealthCheck"></a>

```go
func ResetTcpHealthCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeoutSec"></a>

```go
func ResetTimeoutSec()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.GoogleComputeHealthCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.GoogleComputeHealthCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.GoogleComputeHealthCheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.GoogleComputeHealthCheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference">GoogleComputeHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference">GoogleComputeHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference">GoogleComputeHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference">GoogleComputeHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference">GoogleComputeHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference">GoogleComputeHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference">GoogleComputeHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference">GoogleComputeHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSecInput">CheckIntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheckInput">GrpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheckInput">Http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheckInput">HttpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheckInput">HttpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegionsInput">SourceRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheckInput">SslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheckInput">TcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegions">SourceRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `GrpcHealthCheck`<sup>Required</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheck"></a>

```go
func GrpcHealthCheck() GoogleComputeHealthCheckGrpcHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference">GoogleComputeHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `Http2HealthCheck`<sup>Required</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheck"></a>

```go
func Http2HealthCheck() GoogleComputeHealthCheckHttp2HealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference">GoogleComputeHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `HttpHealthCheck`<sup>Required</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheck"></a>

```go
func HttpHealthCheck() GoogleComputeHealthCheckHttpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference">GoogleComputeHealthCheckHttpHealthCheckOutputReference</a>

---

##### `HttpsHealthCheck`<sup>Required</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheck"></a>

```go
func HttpsHealthCheck() GoogleComputeHealthCheckHttpsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference">GoogleComputeHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfig"></a>

```go
func LogConfig() GoogleComputeHealthCheckLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference">GoogleComputeHealthCheckLogConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SslHealthCheck`<sup>Required</sup> <a name="SslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheck"></a>

```go
func SslHealthCheck() GoogleComputeHealthCheckSslHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference">GoogleComputeHealthCheckSslHealthCheckOutputReference</a>

---

##### `TcpHealthCheck`<sup>Required</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheck"></a>

```go
func TcpHealthCheck() GoogleComputeHealthCheckTcpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference">GoogleComputeHealthCheckTcpHealthCheckOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeouts"></a>

```go
func Timeouts() GoogleComputeHealthCheckTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference">GoogleComputeHealthCheckTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `CheckIntervalSecInput`<sup>Optional</sup> <a name="CheckIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSecInput"></a>

```go
func CheckIntervalSecInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GrpcHealthCheckInput`<sup>Optional</sup> <a name="GrpcHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheckInput"></a>

```go
func GrpcHealthCheckInput() GoogleComputeHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `Http2HealthCheckInput`<sup>Optional</sup> <a name="Http2HealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheckInput"></a>

```go
func Http2HealthCheckInput() GoogleComputeHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

---

##### `HttpHealthCheckInput`<sup>Optional</sup> <a name="HttpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheckInput"></a>

```go
func HttpHealthCheckInput() GoogleComputeHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

---

##### `HttpsHealthCheckInput`<sup>Optional</sup> <a name="HttpsHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheckInput"></a>

```go
func HttpsHealthCheckInput() GoogleComputeHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfigInput"></a>

```go
func LogConfigInput() GoogleComputeHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SourceRegionsInput`<sup>Optional</sup> <a name="SourceRegionsInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegionsInput"></a>

```go
func SourceRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SslHealthCheckInput`<sup>Optional</sup> <a name="SslHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheckInput"></a>

```go
func SslHealthCheckInput() GoogleComputeHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

---

##### `TcpHealthCheckInput`<sup>Optional</sup> <a name="TcpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheckInput"></a>

```go
func TcpHealthCheckInput() GoogleComputeHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSecInput"></a>

```go
func TimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `CheckIntervalSec`<sup>Required</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSec"></a>

```go
func CheckIntervalSec() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SourceRegions`<sup>Required</sup> <a name="SourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegions"></a>

```go
func SourceRegions() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSec"></a>

```go
func TimeoutSec() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeHealthCheckConfig <a name="GoogleComputeHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

&googlecomputehealthcheck.GoogleComputeHealthCheckConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CheckIntervalSec: *f64,
	Description: *string,
	GrpcHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck,
	HealthyThreshold: *f64,
	Http2HealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck,
	HttpHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck,
	HttpsHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck,
	Id: *string,
	LogConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig,
	Project: *string,
	SourceRegions: *[]*string,
	SslHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck,
	TcpHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts,
	TimeoutSec: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#id GoogleComputeHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#project GoogleComputeHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sourceRegions">SourceRegions</a></code> | <code>*[]*string</code> | The list of cloud regions from which health checks are performed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#name GoogleComputeHealthCheck#name}

---

##### `CheckIntervalSec`<sup>Optional</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.checkIntervalSec"></a>

```go
CheckIntervalSec *f64
```

- *Type:* *f64

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#check_interval_sec GoogleComputeHealthCheck#check_interval_sec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#description GoogleComputeHealthCheck#description}

---

##### `GrpcHealthCheck`<sup>Optional</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.grpcHealthCheck"></a>

```go
GrpcHealthCheck GoogleComputeHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#grpc_health_check GoogleComputeHealthCheck#grpc_health_check}

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#healthy_threshold GoogleComputeHealthCheck#healthy_threshold}

---

##### `Http2HealthCheck`<sup>Optional</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.http2HealthCheck"></a>

```go
Http2HealthCheck GoogleComputeHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#http2_health_check GoogleComputeHealthCheck#http2_health_check}

---

##### `HttpHealthCheck`<sup>Optional</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpHealthCheck"></a>

```go
HttpHealthCheck GoogleComputeHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#http_health_check GoogleComputeHealthCheck#http_health_check}

---

##### `HttpsHealthCheck`<sup>Optional</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpsHealthCheck"></a>

```go
HttpsHealthCheck GoogleComputeHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#https_health_check GoogleComputeHealthCheck#https_health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#id GoogleComputeHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.logConfig"></a>

```go
LogConfig GoogleComputeHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#log_config GoogleComputeHealthCheck#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#project GoogleComputeHealthCheck#project}.

---

##### `SourceRegions`<sup>Optional</sup> <a name="SourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sourceRegions"></a>

```go
SourceRegions *[]*string
```

- *Type:* *[]*string

The list of cloud regions from which health checks are performed.

If
any regions are specified, then exactly 3 regions should be specified.
The region names must be valid names of Google Cloud regions. This can
only be set for global health check. If this list is non-empty, then
there are restrictions on what other health check fields are supported
and what other resources can use this health check:

* SSL, HTTP2, and GRPC protocols are not supported.
* The TCP request field is not supported.
* The proxyHeader field for HTTP, HTTPS, and TCP is not supported.
* The checkIntervalSec field must be at least 30.
* The health check cannot be used with BackendService nor with managed
  instance group auto-healing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#source_regions GoogleComputeHealthCheck#source_regions}

---

##### `SslHealthCheck`<sup>Optional</sup> <a name="SslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sslHealthCheck"></a>

```go
SslHealthCheck GoogleComputeHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#ssl_health_check GoogleComputeHealthCheck#ssl_health_check}

---

##### `TcpHealthCheck`<sup>Optional</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.tcpHealthCheck"></a>

```go
TcpHealthCheck GoogleComputeHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#tcp_health_check GoogleComputeHealthCheck#tcp_health_check}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeHealthCheckTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#timeouts GoogleComputeHealthCheck#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeoutSec"></a>

```go
TimeoutSec *f64
```

- *Type:* *f64

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#timeout_sec GoogleComputeHealthCheck#timeout_sec}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#unhealthy_threshold GoogleComputeHealthCheck#unhealthy_threshold}

---

### GoogleComputeHealthCheckGrpcHealthCheck <a name="GoogleComputeHealthCheckGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

&googlecomputehealthcheck.GoogleComputeHealthCheckGrpcHealthCheck {
	GrpcServiceName: *string,
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.grpcServiceName">GrpcServiceName</a></code> | <code>*string</code> | The gRPC service name for the health check. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `GrpcServiceName`<sup>Optional</sup> <a name="GrpcServiceName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```go
GrpcServiceName *string
```

- *Type:* *string

The gRPC service name for the health check.

The value of grpcServiceName has the following meanings by convention:

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
  The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#grpc_service_name GoogleComputeHealthCheck#grpc_service_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

### GoogleComputeHealthCheckHttp2HealthCheck <a name="GoogleComputeHealthCheckHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

&googlecomputehealthcheck.GoogleComputeHealthCheckHttp2HealthCheck {
	Host: *string,
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	RequestPath: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#host GoogleComputeHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#request_path GoogleComputeHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckHttpHealthCheck <a name="GoogleComputeHealthCheckHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

&googlecomputehealthcheck.GoogleComputeHealthCheckHttpHealthCheck {
	Host: *string,
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	RequestPath: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#host GoogleComputeHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#request_path GoogleComputeHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckHttpsHealthCheck <a name="GoogleComputeHealthCheckHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

&googlecomputehealthcheck.GoogleComputeHealthCheckHttpsHealthCheck {
	Host: *string,
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	RequestPath: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#host GoogleComputeHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#request_path GoogleComputeHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckLogConfig <a name="GoogleComputeHealthCheckLogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

&googlecomputehealthcheck.GoogleComputeHealthCheckLogConfig {
	Enable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Indicates whether or not to export logs. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#enable GoogleComputeHealthCheck#enable}

---

### GoogleComputeHealthCheckSslHealthCheck <a name="GoogleComputeHealthCheckSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

&googlecomputehealthcheck.GoogleComputeHealthCheckSslHealthCheck {
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	Request: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.request">Request</a></code> | <code>*string</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.request"></a>

```go
Request *string
```

- *Type:* *string

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#request GoogleComputeHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckTcpHealthCheck <a name="GoogleComputeHealthCheckTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

&googlecomputehealthcheck.GoogleComputeHealthCheckTcpHealthCheck {
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
	ProxyHeader: *string,
	Request: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the TCP health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.request">Request</a></code> | <code>*string</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the TCP health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portSpecification"></a>

```go
PortSpecification *string
```

- *Type:* *string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.request"></a>

```go
Request *string
```

- *Type:* *string

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#request GoogleComputeHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckTimeouts <a name="GoogleComputeHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

&googlecomputehealthcheck.GoogleComputeHealthCheckTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#create GoogleComputeHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#delete GoogleComputeHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#update GoogleComputeHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#create GoogleComputeHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#delete GoogleComputeHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_health_check#update GoogleComputeHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeHealthCheckGrpcHealthCheckOutputReference <a name="GoogleComputeHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.NewGoogleComputeHealthCheckGrpcHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeHealthCheckGrpcHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">ResetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrpcServiceName` <a name="ResetGrpcServiceName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```go
func ResetGrpcServiceName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">GrpcServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">GrpcServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrpcServiceNameInput`<sup>Optional</sup> <a name="GrpcServiceNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```go
func GrpcServiceNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `GrpcServiceName`<sup>Required</sup> <a name="GrpcServiceName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```go
func GrpcServiceName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

---


### GoogleComputeHealthCheckHttp2HealthCheckOutputReference <a name="GoogleComputeHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.NewGoogleComputeHealthCheckHttp2HealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeHealthCheckHttp2HealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

---


### GoogleComputeHealthCheckHttpHealthCheckOutputReference <a name="GoogleComputeHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.NewGoogleComputeHealthCheckHttpHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeHealthCheckHttpHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

---


### GoogleComputeHealthCheckHttpsHealthCheckOutputReference <a name="GoogleComputeHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.NewGoogleComputeHealthCheckHttpsHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeHealthCheckHttpsHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

---


### GoogleComputeHealthCheckLogConfigOutputReference <a name="GoogleComputeHealthCheckLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.NewGoogleComputeHealthCheckLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeHealthCheckLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resetEnable"></a>

```go
func ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

---


### GoogleComputeHealthCheckSslHealthCheckOutputReference <a name="GoogleComputeHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.NewGoogleComputeHealthCheckSslHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeHealthCheckSslHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```go
func ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```go
func RequestInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

---


### GoogleComputeHealthCheckTcpHealthCheckOutputReference <a name="GoogleComputeHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.NewGoogleComputeHealthCheckTcpHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeHealthCheckTcpHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```go
func ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```go
func RequestInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

---


### GoogleComputeHealthCheckTimeoutsOutputReference <a name="GoogleComputeHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputehealthcheck"

googlecomputehealthcheck.NewGoogleComputeHealthCheckTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeHealthCheckTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



