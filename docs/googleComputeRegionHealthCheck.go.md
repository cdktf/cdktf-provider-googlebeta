# `googleComputeRegionHealthCheck` Submodule <a name="`googleComputeRegionHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionHealthCheck <a name="GoogleComputeRegionHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check google_compute_region_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.NewGoogleComputeRegionHealthCheck(scope Construct, id *string, config GoogleComputeRegionHealthCheckConfig) GoogleComputeRegionHealthCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig">GoogleComputeRegionHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig">GoogleComputeRegionHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck">PutGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck">PutHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck">PutHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck">PutHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck">PutSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck">PutTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetCheckIntervalSec">ResetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetGrpcHealthCheck">ResetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttp2HealthCheck">ResetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpHealthCheck">ResetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpsHealthCheck">ResetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetSslHealthCheck">ResetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTcpHealthCheck">ResetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGrpcHealthCheck` <a name="PutGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck"></a>

```go
func PutGrpcHealthCheck(value GoogleComputeRegionHealthCheckGrpcHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `PutHttp2HealthCheck` <a name="PutHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck"></a>

```go
func PutHttp2HealthCheck(value GoogleComputeRegionHealthCheckHttp2HealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `PutHttpHealthCheck` <a name="PutHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck"></a>

```go
func PutHttpHealthCheck(value GoogleComputeRegionHealthCheckHttpHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `PutHttpsHealthCheck` <a name="PutHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck"></a>

```go
func PutHttpsHealthCheck(value GoogleComputeRegionHealthCheckHttpsHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putLogConfig"></a>

```go
func PutLogConfig(value GoogleComputeRegionHealthCheckLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

---

##### `PutSslHealthCheck` <a name="PutSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck"></a>

```go
func PutSslHealthCheck(value GoogleComputeRegionHealthCheckSslHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

---

##### `PutTcpHealthCheck` <a name="PutTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck"></a>

```go
func PutTcpHealthCheck(value GoogleComputeRegionHealthCheckTcpHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRegionHealthCheckTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>

---

##### `ResetCheckIntervalSec` <a name="ResetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetCheckIntervalSec"></a>

```go
func ResetCheckIntervalSec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGrpcHealthCheck` <a name="ResetGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetGrpcHealthCheck"></a>

```go
func ResetGrpcHealthCheck()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetHttp2HealthCheck` <a name="ResetHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttp2HealthCheck"></a>

```go
func ResetHttp2HealthCheck()
```

##### `ResetHttpHealthCheck` <a name="ResetHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpHealthCheck"></a>

```go
func ResetHttpHealthCheck()
```

##### `ResetHttpsHealthCheck` <a name="ResetHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpsHealthCheck"></a>

```go
func ResetHttpsHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetId"></a>

```go
func ResetId()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSslHealthCheck` <a name="ResetSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetSslHealthCheck"></a>

```go
func ResetSslHealthCheck()
```

##### `ResetTcpHealthCheck` <a name="ResetTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTcpHealthCheck"></a>

```go
func ResetTcpHealthCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeoutSec"></a>

```go
func ResetTimeoutSec()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeRegionHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeRegionHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeRegionHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference">GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthCheckId">HealthCheckId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference">GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference">GoogleComputeRegionHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference">GoogleComputeRegionHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference">GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference">GoogleComputeRegionHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSecInput">CheckIntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheckInput">GrpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheckInput">Http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheckInput">HttpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheckInput">HttpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheckInput">SslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheckInput">TcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `GrpcHealthCheck`<sup>Required</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheck"></a>

```go
func GrpcHealthCheck() GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference">GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthCheckId"></a>

```go
func HealthCheckId() *f64
```

- *Type:* *f64

---

##### `Http2HealthCheck`<sup>Required</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheck"></a>

```go
func Http2HealthCheck() GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference">GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `HttpHealthCheck`<sup>Required</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheck"></a>

```go
func HttpHealthCheck() GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference</a>

---

##### `HttpsHealthCheck`<sup>Required</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheck"></a>

```go
func HttpsHealthCheck() GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfig"></a>

```go
func LogConfig() GoogleComputeRegionHealthCheckLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference">GoogleComputeRegionHealthCheckLogConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SslHealthCheck`<sup>Required</sup> <a name="SslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheck"></a>

```go
func SslHealthCheck() GoogleComputeRegionHealthCheckSslHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference">GoogleComputeRegionHealthCheckSslHealthCheckOutputReference</a>

---

##### `TcpHealthCheck`<sup>Required</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheck"></a>

```go
func TcpHealthCheck() GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference">GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRegionHealthCheckTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference">GoogleComputeRegionHealthCheckTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `CheckIntervalSecInput`<sup>Optional</sup> <a name="CheckIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSecInput"></a>

```go
func CheckIntervalSecInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GrpcHealthCheckInput`<sup>Optional</sup> <a name="GrpcHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheckInput"></a>

```go
func GrpcHealthCheckInput() GoogleComputeRegionHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `Http2HealthCheckInput`<sup>Optional</sup> <a name="Http2HealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheckInput"></a>

```go
func Http2HealthCheckInput() GoogleComputeRegionHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `HttpHealthCheckInput`<sup>Optional</sup> <a name="HttpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheckInput"></a>

```go
func HttpHealthCheckInput() GoogleComputeRegionHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `HttpsHealthCheckInput`<sup>Optional</sup> <a name="HttpsHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheckInput"></a>

```go
func HttpsHealthCheckInput() GoogleComputeRegionHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfigInput"></a>

```go
func LogConfigInput() GoogleComputeRegionHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SslHealthCheckInput`<sup>Optional</sup> <a name="SslHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheckInput"></a>

```go
func SslHealthCheckInput() GoogleComputeRegionHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

---

##### `TcpHealthCheckInput`<sup>Optional</sup> <a name="TcpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheckInput"></a>

```go
func TcpHealthCheckInput() GoogleComputeRegionHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSecInput"></a>

```go
func TimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `CheckIntervalSec`<sup>Required</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSec"></a>

```go
func CheckIntervalSec() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSec"></a>

```go
func TimeoutSec() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionHealthCheckConfig <a name="GoogleComputeRegionHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

&googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheckConfig {
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
	GrpcHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck,
	HealthyThreshold: *f64,
	Http2HealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck,
	HttpHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck,
	HttpsHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck,
	Id: *string,
	LogConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig,
	Project: *string,
	Region: *string,
	SslHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck,
	TcpHealthCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts,
	TimeoutSec: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#id GoogleComputeRegionHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#project GoogleComputeRegionHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created health check should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#name GoogleComputeRegionHealthCheck#name}

---

##### `CheckIntervalSec`<sup>Optional</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.checkIntervalSec"></a>

```go
CheckIntervalSec *f64
```

- *Type:* *f64

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#check_interval_sec GoogleComputeRegionHealthCheck#check_interval_sec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#description GoogleComputeRegionHealthCheck#description}

---

##### `GrpcHealthCheck`<sup>Optional</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.grpcHealthCheck"></a>

```go
GrpcHealthCheck GoogleComputeRegionHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#grpc_health_check GoogleComputeRegionHealthCheck#grpc_health_check}

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#healthy_threshold GoogleComputeRegionHealthCheck#healthy_threshold}

---

##### `Http2HealthCheck`<sup>Optional</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.http2HealthCheck"></a>

```go
Http2HealthCheck GoogleComputeRegionHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#http2_health_check GoogleComputeRegionHealthCheck#http2_health_check}

---

##### `HttpHealthCheck`<sup>Optional</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpHealthCheck"></a>

```go
HttpHealthCheck GoogleComputeRegionHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#http_health_check GoogleComputeRegionHealthCheck#http_health_check}

---

##### `HttpsHealthCheck`<sup>Optional</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpsHealthCheck"></a>

```go
HttpsHealthCheck GoogleComputeRegionHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#https_health_check GoogleComputeRegionHealthCheck#https_health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#id GoogleComputeRegionHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.logConfig"></a>

```go
LogConfig GoogleComputeRegionHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#log_config GoogleComputeRegionHealthCheck#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#project GoogleComputeRegionHealthCheck#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created health check should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#region GoogleComputeRegionHealthCheck#region}

---

##### `SslHealthCheck`<sup>Optional</sup> <a name="SslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.sslHealthCheck"></a>

```go
SslHealthCheck GoogleComputeRegionHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#ssl_health_check GoogleComputeRegionHealthCheck#ssl_health_check}

---

##### `TcpHealthCheck`<sup>Optional</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.tcpHealthCheck"></a>

```go
TcpHealthCheck GoogleComputeRegionHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#tcp_health_check GoogleComputeRegionHealthCheck#tcp_health_check}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRegionHealthCheckTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#timeouts GoogleComputeRegionHealthCheck#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeoutSec"></a>

```go
TimeoutSec *f64
```

- *Type:* *f64

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#timeout_sec GoogleComputeRegionHealthCheck#timeout_sec}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#unhealthy_threshold GoogleComputeRegionHealthCheck#unhealthy_threshold}

---

### GoogleComputeRegionHealthCheckGrpcHealthCheck <a name="GoogleComputeRegionHealthCheckGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

&googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheckGrpcHealthCheck {
	GrpcServiceName: *string,
	Port: *f64,
	PortName: *string,
	PortSpecification: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName">GrpcServiceName</a></code> | <code>*string</code> | The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `GrpcServiceName`<sup>Optional</sup> <a name="GrpcServiceName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```go
GrpcServiceName *string
```

- *Type:* *string

The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:.

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.

The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#grpc_service_name GoogleComputeRegionHealthCheck#grpc_service_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

### GoogleComputeRegionHealthCheckHttp2HealthCheck <a name="GoogleComputeRegionHealthCheckHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

&googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheckHttp2HealthCheck {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckHttpHealthCheck <a name="GoogleComputeRegionHealthCheckHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

&googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheckHttpHealthCheck {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portSpecification"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckHttpsHealthCheck <a name="GoogleComputeRegionHealthCheckHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

&googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheckHttpsHealthCheck {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckLogConfig <a name="GoogleComputeRegionHealthCheckLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

&googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheckLogConfig {
	Enable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Indicates whether or not to export logs. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#enable GoogleComputeRegionHealthCheck#enable}

---

### GoogleComputeRegionHealthCheckSslHealthCheck <a name="GoogleComputeRegionHealthCheckSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

&googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheckSslHealthCheck {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.request">Request</a></code> | <code>*string</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portSpecification"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.request"></a>

```go
Request *string
```

- *Type:* *string

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckTcpHealthCheck <a name="GoogleComputeRegionHealthCheckTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

&googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheckTcpHealthCheck {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the TCP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portName">PortName</a></code> | <code>*string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.request">Request</a></code> | <code>*string</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.response">Response</a></code> | <code>*string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the TCP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portSpecification"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.request"></a>

```go
Request *string
```

- *Type:* *string

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.response"></a>

```go
Response *string
```

- *Type:* *string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckTimeouts <a name="GoogleComputeRegionHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

&googlecomputeregionhealthcheck.GoogleComputeRegionHealthCheckTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#create GoogleComputeRegionHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#delete GoogleComputeRegionHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#update GoogleComputeRegionHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#create GoogleComputeRegionHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#delete GoogleComputeRegionHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_health_check#update GoogleComputeRegionHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.NewGoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">ResetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrpcServiceName` <a name="ResetGrpcServiceName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```go
func ResetGrpcServiceName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">GrpcServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">GrpcServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrpcServiceNameInput`<sup>Optional</sup> <a name="GrpcServiceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```go
func GrpcServiceNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `GrpcServiceName`<sup>Required</sup> <a name="GrpcServiceName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```go
func GrpcServiceName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

---


### GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.NewGoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

---


### GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.NewGoogleComputeRegionHealthCheckHttpHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

---


### GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.NewGoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

---


### GoogleComputeRegionHealthCheckLogConfigOutputReference <a name="GoogleComputeRegionHealthCheckLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.NewGoogleComputeRegionHealthCheckLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionHealthCheckLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resetEnable"></a>

```go
func ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

---


### GoogleComputeRegionHealthCheckSslHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.NewGoogleComputeRegionHealthCheckSslHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionHealthCheckSslHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```go
func ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```go
func RequestInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

---


### GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.NewGoogleComputeRegionHealthCheckTcpHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```go
func ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```go
func ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```go
func PortSpecificationInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```go
func RequestInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```go
func PortSpecification() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

---


### GoogleComputeRegionHealthCheckTimeoutsOutputReference <a name="GoogleComputeRegionHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionhealthcheck"

googlecomputeregionhealthcheck.NewGoogleComputeRegionHealthCheckTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionHealthCheckTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



