# `googleComputeTargetHttpsProxy` Submodule <a name="`googleComputeTargetHttpsProxy` Submodule" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeTargetHttpsProxy <a name="GoogleComputeTargetHttpsProxy" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy google_compute_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargethttpsproxy"

googlecomputetargethttpsproxy.NewGoogleComputeTargetHttpsProxy(scope Construct, id *string, config GoogleComputeTargetHttpsProxyConfig) GoogleComputeTargetHttpsProxy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig">GoogleComputeTargetHttpsProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig">GoogleComputeTargetHttpsProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetCertificateManagerCertificates">ResetCertificateManagerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetCertificateMap">ResetCertificateMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec">ResetHttpKeepAliveTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetProxyBind">ResetProxyBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetQuicOverride">ResetQuicOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetServerTlsPolicy">ResetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetSslCertificates">ResetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetSslPolicy">ResetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetTlsEarlyData">ResetTlsEarlyData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeTargetHttpsProxyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts">GoogleComputeTargetHttpsProxyTimeouts</a>

---

##### `ResetCertificateManagerCertificates` <a name="ResetCertificateManagerCertificates" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetCertificateManagerCertificates"></a>

```go
func ResetCertificateManagerCertificates()
```

##### `ResetCertificateMap` <a name="ResetCertificateMap" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetCertificateMap"></a>

```go
func ResetCertificateMap()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHttpKeepAliveTimeoutSec` <a name="ResetHttpKeepAliveTimeoutSec" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec"></a>

```go
func ResetHttpKeepAliveTimeoutSec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProxyBind` <a name="ResetProxyBind" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetProxyBind"></a>

```go
func ResetProxyBind()
```

##### `ResetQuicOverride` <a name="ResetQuicOverride" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetQuicOverride"></a>

```go
func ResetQuicOverride()
```

##### `ResetServerTlsPolicy` <a name="ResetServerTlsPolicy" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetServerTlsPolicy"></a>

```go
func ResetServerTlsPolicy()
```

##### `ResetSslCertificates` <a name="ResetSslCertificates" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetSslCertificates"></a>

```go
func ResetSslCertificates()
```

##### `ResetSslPolicy` <a name="ResetSslPolicy" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetSslPolicy"></a>

```go
func ResetSslPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsEarlyData` <a name="ResetTlsEarlyData" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.resetTlsEarlyData"></a>

```go
func ResetTlsEarlyData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeTargetHttpsProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargethttpsproxy"

googlecomputetargethttpsproxy.GoogleComputeTargetHttpsProxy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargethttpsproxy"

googlecomputetargethttpsproxy.GoogleComputeTargetHttpsProxy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargethttpsproxy"

googlecomputetargethttpsproxy.GoogleComputeTargetHttpsProxy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargethttpsproxy"

googlecomputetargethttpsproxy.GoogleComputeTargetHttpsProxy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeTargetHttpsProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeTargetHttpsProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.proxyId">ProxyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference">GoogleComputeTargetHttpsProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.certificateManagerCertificatesInput">CertificateManagerCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.certificateMapInput">CertificateMapInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput">HttpKeepAliveTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.proxyBindInput">ProxyBindInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.quicOverrideInput">QuicOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.serverTlsPolicyInput">ServerTlsPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.sslCertificatesInput">SslCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.sslPolicyInput">SslPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.tlsEarlyDataInput">TlsEarlyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.urlMapInput">UrlMapInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.certificateManagerCertificates">CertificateManagerCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.certificateMap">CertificateMap</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec">HttpKeepAliveTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.proxyBind">ProxyBind</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.quicOverride">QuicOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.sslCertificates">SslCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.tlsEarlyData">TlsEarlyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.urlMap">UrlMap</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.proxyId"></a>

```go
func ProxyId() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.timeouts"></a>

```go
func Timeouts() GoogleComputeTargetHttpsProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference">GoogleComputeTargetHttpsProxyTimeoutsOutputReference</a>

---

##### `CertificateManagerCertificatesInput`<sup>Optional</sup> <a name="CertificateManagerCertificatesInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.certificateManagerCertificatesInput"></a>

```go
func CertificateManagerCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateMapInput`<sup>Optional</sup> <a name="CertificateMapInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.certificateMapInput"></a>

```go
func CertificateMapInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HttpKeepAliveTimeoutSecInput`<sup>Optional</sup> <a name="HttpKeepAliveTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput"></a>

```go
func HttpKeepAliveTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProxyBindInput`<sup>Optional</sup> <a name="ProxyBindInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.proxyBindInput"></a>

```go
func ProxyBindInput() interface{}
```

- *Type:* interface{}

---

##### `QuicOverrideInput`<sup>Optional</sup> <a name="QuicOverrideInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.quicOverrideInput"></a>

```go
func QuicOverrideInput() *string
```

- *Type:* *string

---

##### `ServerTlsPolicyInput`<sup>Optional</sup> <a name="ServerTlsPolicyInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.serverTlsPolicyInput"></a>

```go
func ServerTlsPolicyInput() *string
```

- *Type:* *string

---

##### `SslCertificatesInput`<sup>Optional</sup> <a name="SslCertificatesInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.sslCertificatesInput"></a>

```go
func SslCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SslPolicyInput`<sup>Optional</sup> <a name="SslPolicyInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.sslPolicyInput"></a>

```go
func SslPolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsEarlyDataInput`<sup>Optional</sup> <a name="TlsEarlyDataInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.tlsEarlyDataInput"></a>

```go
func TlsEarlyDataInput() *string
```

- *Type:* *string

---

##### `UrlMapInput`<sup>Optional</sup> <a name="UrlMapInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.urlMapInput"></a>

```go
func UrlMapInput() *string
```

- *Type:* *string

---

##### `CertificateManagerCertificates`<sup>Required</sup> <a name="CertificateManagerCertificates" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.certificateManagerCertificates"></a>

```go
func CertificateManagerCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateMap`<sup>Required</sup> <a name="CertificateMap" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.certificateMap"></a>

```go
func CertificateMap() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HttpKeepAliveTimeoutSec`<sup>Required</sup> <a name="HttpKeepAliveTimeoutSec" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec"></a>

```go
func HttpKeepAliveTimeoutSec() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProxyBind`<sup>Required</sup> <a name="ProxyBind" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.proxyBind"></a>

```go
func ProxyBind() interface{}
```

- *Type:* interface{}

---

##### `QuicOverride`<sup>Required</sup> <a name="QuicOverride" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.quicOverride"></a>

```go
func QuicOverride() *string
```

- *Type:* *string

---

##### `ServerTlsPolicy`<sup>Required</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.serverTlsPolicy"></a>

```go
func ServerTlsPolicy() *string
```

- *Type:* *string

---

##### `SslCertificates`<sup>Required</sup> <a name="SslCertificates" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.sslCertificates"></a>

```go
func SslCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.sslPolicy"></a>

```go
func SslPolicy() *string
```

- *Type:* *string

---

##### `TlsEarlyData`<sup>Required</sup> <a name="TlsEarlyData" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.tlsEarlyData"></a>

```go
func TlsEarlyData() *string
```

- *Type:* *string

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.urlMap"></a>

```go
func UrlMap() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeTargetHttpsProxyConfig <a name="GoogleComputeTargetHttpsProxyConfig" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargethttpsproxy"

&googlecomputetargethttpsproxy.GoogleComputeTargetHttpsProxyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	UrlMap: *string,
	CertificateManagerCertificates: *[]*string,
	CertificateMap: *string,
	Description: *string,
	HttpKeepAliveTimeoutSec: *f64,
	Id: *string,
	Project: *string,
	ProxyBind: interface{},
	QuicOverride: *string,
	ServerTlsPolicy: *string,
	SslCertificates: *[]*string,
	SslPolicy: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts,
	TlsEarlyData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.urlMap">UrlMap</a></code> | <code>*string</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.certificateManagerCertificates">CertificateManagerCertificates</a></code> | <code>*[]*string</code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.certificateMap">CertificateMap</a></code> | <code>*string</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec">HttpKeepAliveTimeoutSec</a></code> | <code>*f64</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#id GoogleComputeTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#project GoogleComputeTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.proxyBind">ProxyBind</a></code> | <code>interface{}</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.quicOverride">QuicOverride</a></code> | <code>*string</code> | Specifies the QUIC override policy for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>*string</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.sslCertificates">SslCertificates</a></code> | <code>*[]*string</code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts">GoogleComputeTargetHttpsProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.tlsEarlyData">TlsEarlyData</a></code> | <code>*string</code> | Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#name GoogleComputeTargetHttpsProxy#name}

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.urlMap"></a>

```go
UrlMap *string
```

- *Type:* *string

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#url_map GoogleComputeTargetHttpsProxy#url_map}

---

##### `CertificateManagerCertificates`<sup>Optional</sup> <a name="CertificateManagerCertificates" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.certificateManagerCertificates"></a>

```go
CertificateManagerCertificates *[]*string
```

- *Type:* *[]*string

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

Certificate manager certificates only apply when the load balancing scheme is set to INTERNAL_MANAGED.
For EXTERNAL and EXTERNAL_MANAGED, use certificate_map instead.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#certificate_manager_certificates GoogleComputeTargetHttpsProxy#certificate_manager_certificates}

---

##### `CertificateMap`<sup>Optional</sup> <a name="CertificateMap" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.certificateMap"></a>

```go
CertificateMap *string
```

- *Type:* *string

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field is only supported for EXTERNAL and EXTERNAL_MANAGED load balancing schemes.
For INTERNAL_MANAGED, use certificate_manager_certificates instead.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#certificate_map GoogleComputeTargetHttpsProxy#certificate_map}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#description GoogleComputeTargetHttpsProxy#description}

---

##### `HttpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="HttpKeepAliveTimeoutSec" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```go
HttpKeepAliveTimeoutSec *f64
```

- *Type:* *f64

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value will be used. For Global
external HTTP(S) load balancer, the default value is 610 seconds, the
minimum allowed value is 5 seconds and the maximum allowed value is 1200
seconds. For cross-region internal HTTP(S) load balancer, the default
value is 600 seconds, the minimum allowed value is 5 seconds, and the
maximum allowed value is 600 seconds. For Global external HTTP(S) load
balancer (classic), this option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#http_keep_alive_timeout_sec GoogleComputeTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#id GoogleComputeTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#project GoogleComputeTargetHttpsProxy#project}.

---

##### `ProxyBind`<sup>Optional</sup> <a name="ProxyBind" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.proxyBind"></a>

```go
ProxyBind interface{}
```

- *Type:* interface{}

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#proxy_bind GoogleComputeTargetHttpsProxy#proxy_bind}

---

##### `QuicOverride`<sup>Optional</sup> <a name="QuicOverride" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.quicOverride"></a>

```go
QuicOverride *string
```

- *Type:* *string

Specifies the QUIC override policy for this resource.

This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, Google manages whether QUIC is used. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#quic_override GoogleComputeTargetHttpsProxy#quic_override}

---

##### `ServerTlsPolicy`<sup>Optional</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.serverTlsPolicy"></a>

```go
ServerTlsPolicy *string
```

- *Type:* *string

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#server_tls_policy GoogleComputeTargetHttpsProxy#server_tls_policy}

---

##### `SslCertificates`<sup>Optional</sup> <a name="SslCertificates" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.sslCertificates"></a>

```go
SslCertificates *[]*string
```

- *Type:* *[]*string

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates can not be defined together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#ssl_certificates GoogleComputeTargetHttpsProxy#ssl_certificates}

---

##### `SslPolicy`<sup>Optional</sup> <a name="SslPolicy" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.sslPolicy"></a>

```go
SslPolicy *string
```

- *Type:* *string

A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#ssl_policy GoogleComputeTargetHttpsProxy#ssl_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeTargetHttpsProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts">GoogleComputeTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#timeouts GoogleComputeTargetHttpsProxy#timeouts}

---

##### `TlsEarlyData`<sup>Optional</sup> <a name="TlsEarlyData" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyConfig.property.tlsEarlyData"></a>

```go
TlsEarlyData *string
```

- *Type:* *string

Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#tls_early_data GoogleComputeTargetHttpsProxy#tls_early_data}

---

### GoogleComputeTargetHttpsProxyTimeouts <a name="GoogleComputeTargetHttpsProxyTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargethttpsproxy"

&googlecomputetargethttpsproxy.GoogleComputeTargetHttpsProxyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#create GoogleComputeTargetHttpsProxy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#delete GoogleComputeTargetHttpsProxy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#update GoogleComputeTargetHttpsProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#create GoogleComputeTargetHttpsProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#delete GoogleComputeTargetHttpsProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_https_proxy#update GoogleComputeTargetHttpsProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeTargetHttpsProxyTimeoutsOutputReference <a name="GoogleComputeTargetHttpsProxyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargethttpsproxy"

googlecomputetargethttpsproxy.NewGoogleComputeTargetHttpsProxyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeTargetHttpsProxyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeTargetHttpsProxy.GoogleComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



