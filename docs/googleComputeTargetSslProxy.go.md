# `googleComputeTargetSslProxy` Submodule <a name="`googleComputeTargetSslProxy` Submodule" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeTargetSslProxy <a name="GoogleComputeTargetSslProxy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy google_compute_target_ssl_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargetsslproxy"

googlecomputetargetsslproxy.NewGoogleComputeTargetSslProxy(scope Construct, id *string, config GoogleComputeTargetSslProxyConfig) GoogleComputeTargetSslProxy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig">GoogleComputeTargetSslProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig">GoogleComputeTargetSslProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetCertificateMap">ResetCertificateMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslCertificates">ResetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslPolicy">ResetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeTargetSslProxyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>

---

##### `ResetCertificateMap` <a name="ResetCertificateMap" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetCertificateMap"></a>

```go
func ResetCertificateMap()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProxyHeader"></a>

```go
func ResetProxyHeader()
```

##### `ResetSslCertificates` <a name="ResetSslCertificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslCertificates"></a>

```go
func ResetSslCertificates()
```

##### `ResetSslPolicy` <a name="ResetSslPolicy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslPolicy"></a>

```go
func ResetSslPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeTargetSslProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargetsslproxy"

googlecomputetargetsslproxy.GoogleComputeTargetSslProxy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargetsslproxy"

googlecomputetargetsslproxy.GoogleComputeTargetSslProxy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargetsslproxy"

googlecomputetargetsslproxy.GoogleComputeTargetSslProxy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargetsslproxy"

googlecomputetargetsslproxy.GoogleComputeTargetSslProxy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeTargetSslProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeTargetSslProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeTargetSslProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeTargetSslProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyId">ProxyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference">GoogleComputeTargetSslProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendServiceInput">BackendServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMapInput">CertificateMapInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificatesInput">SslCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicyInput">SslPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendService">BackendService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMap">CertificateMap</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificates">SslCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyId"></a>

```go
func ProxyId() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeouts"></a>

```go
func Timeouts() GoogleComputeTargetSslProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference">GoogleComputeTargetSslProxyTimeoutsOutputReference</a>

---

##### `BackendServiceInput`<sup>Optional</sup> <a name="BackendServiceInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendServiceInput"></a>

```go
func BackendServiceInput() *string
```

- *Type:* *string

---

##### `CertificateMapInput`<sup>Optional</sup> <a name="CertificateMapInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMapInput"></a>

```go
func CertificateMapInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeaderInput"></a>

```go
func ProxyHeaderInput() *string
```

- *Type:* *string

---

##### `SslCertificatesInput`<sup>Optional</sup> <a name="SslCertificatesInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificatesInput"></a>

```go
func SslCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SslPolicyInput`<sup>Optional</sup> <a name="SslPolicyInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicyInput"></a>

```go
func SslPolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendService"></a>

```go
func BackendService() *string
```

- *Type:* *string

---

##### `CertificateMap`<sup>Required</sup> <a name="CertificateMap" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMap"></a>

```go
func CertificateMap() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeader"></a>

```go
func ProxyHeader() *string
```

- *Type:* *string

---

##### `SslCertificates`<sup>Required</sup> <a name="SslCertificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificates"></a>

```go
func SslCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicy"></a>

```go
func SslPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeTargetSslProxyConfig <a name="GoogleComputeTargetSslProxyConfig" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargetsslproxy"

&googlecomputetargetsslproxy.GoogleComputeTargetSslProxyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendService: *string,
	Name: *string,
	CertificateMap: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	ProxyHeader: *string,
	SslCertificates: *[]*string,
	SslPolicy: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.backendService">BackendService</a></code> | <code>*string</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.certificateMap">CertificateMap</a></code> | <code>*string</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#id GoogleComputeTargetSslProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#project GoogleComputeTargetSslProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.proxyHeader">ProxyHeader</a></code> | <code>*string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslCertificates">SslCertificates</a></code> | <code>*[]*string</code> | A list of SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.backendService"></a>

```go
BackendService *string
```

- *Type:* *string

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#backend_service GoogleComputeTargetSslProxy#backend_service}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#name GoogleComputeTargetSslProxy#name}

---

##### `CertificateMap`<sup>Optional</sup> <a name="CertificateMap" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.certificateMap"></a>

```go
CertificateMap *string
```

- *Type:* *string

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field can only be set for global target proxies.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#certificate_map GoogleComputeTargetSslProxy#certificate_map}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#description GoogleComputeTargetSslProxy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#id GoogleComputeTargetSslProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#project GoogleComputeTargetSslProxy#project}.

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.proxyHeader"></a>

```go
ProxyHeader *string
```

- *Type:* *string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#proxy_header GoogleComputeTargetSslProxy#proxy_header}

---

##### `SslCertificates`<sup>Optional</sup> <a name="SslCertificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslCertificates"></a>

```go
SslCertificates *[]*string
```

- *Type:* *[]*string

A list of SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one
SSL certificate must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#ssl_certificates GoogleComputeTargetSslProxy#ssl_certificates}

---

##### `SslPolicy`<sup>Optional</sup> <a name="SslPolicy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslPolicy"></a>

```go
SslPolicy *string
```

- *Type:* *string

A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource.

If not set, the TargetSslProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#ssl_policy GoogleComputeTargetSslProxy#ssl_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeTargetSslProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#timeouts GoogleComputeTargetSslProxy#timeouts}

---

### GoogleComputeTargetSslProxyTimeouts <a name="GoogleComputeTargetSslProxyTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargetsslproxy"

&googlecomputetargetsslproxy.GoogleComputeTargetSslProxyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#create GoogleComputeTargetSslProxy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#delete GoogleComputeTargetSslProxy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#update GoogleComputeTargetSslProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#create GoogleComputeTargetSslProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#delete GoogleComputeTargetSslProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_target_ssl_proxy#update GoogleComputeTargetSslProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeTargetSslProxyTimeoutsOutputReference <a name="GoogleComputeTargetSslProxyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputetargetsslproxy"

googlecomputetargetsslproxy.NewGoogleComputeTargetSslProxyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeTargetSslProxyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



