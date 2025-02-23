# `googleVertexAiEndpoint` Submodule <a name="`googleVertexAiEndpoint` Submodule" id="@cdktf/provider-google-beta.googleVertexAiEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiEndpoint <a name="GoogleVertexAiEndpoint" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint google_vertex_ai_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpoint(scope Construct, id *string, config GoogleVertexAiEndpointConfig) GoogleVertexAiEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig">GoogleVertexAiEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig">GoogleVertexAiEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putPredictRequestResponseLoggingConfig">PutPredictRequestResponseLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putPrivateServiceConnectConfig">PutPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetDedicatedEndpointEnabled">ResetDedicatedEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetPredictRequestResponseLoggingConfig">ResetPredictRequestResponseLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetPrivateServiceConnectConfig">ResetPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetTrafficSplit">ResetTrafficSplit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleVertexAiEndpointEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a>

---

##### `PutPredictRequestResponseLoggingConfig` <a name="PutPredictRequestResponseLoggingConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putPredictRequestResponseLoggingConfig"></a>

```go
func PutPredictRequestResponseLoggingConfig(value GoogleVertexAiEndpointPredictRequestResponseLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putPredictRequestResponseLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig">GoogleVertexAiEndpointPredictRequestResponseLoggingConfig</a>

---

##### `PutPrivateServiceConnectConfig` <a name="PutPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putPrivateServiceConnectConfig"></a>

```go
func PutPrivateServiceConnectConfig(value GoogleVertexAiEndpointPrivateServiceConnectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig">GoogleVertexAiEndpointPrivateServiceConnectConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a>

---

##### `ResetDedicatedEndpointEnabled` <a name="ResetDedicatedEndpointEnabled" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetDedicatedEndpointEnabled"></a>

```go
func ResetDedicatedEndpointEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPredictRequestResponseLoggingConfig` <a name="ResetPredictRequestResponseLoggingConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetPredictRequestResponseLoggingConfig"></a>

```go
func ResetPredictRequestResponseLoggingConfig()
```

##### `ResetPrivateServiceConnectConfig` <a name="ResetPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetPrivateServiceConnectConfig"></a>

```go
func ResetPrivateServiceConnectConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrafficSplit` <a name="ResetTrafficSplit" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.resetTrafficSplit"></a>

```go
func ResetTrafficSplit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.GoogleVertexAiEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.GoogleVertexAiEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.GoogleVertexAiEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.GoogleVertexAiEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleVertexAiEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dedicatedEndpointDns">DedicatedEndpointDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.deployedModels">DeployedModels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList">GoogleVertexAiEndpointDeployedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference">GoogleVertexAiEndpointEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.modelDeploymentMonitoringJob">ModelDeploymentMonitoringJob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.predictRequestResponseLoggingConfig">PredictRequestResponseLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference">GoogleVertexAiEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dedicatedEndpointEnabledInput">DedicatedEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.predictRequestResponseLoggingConfigInput">PredictRequestResponseLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig">GoogleVertexAiEndpointPredictRequestResponseLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.privateServiceConnectConfigInput">PrivateServiceConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig">GoogleVertexAiEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.trafficSplitInput">TrafficSplitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dedicatedEndpointEnabled">DedicatedEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.trafficSplit">TrafficSplit</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DedicatedEndpointDns`<sup>Required</sup> <a name="DedicatedEndpointDns" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dedicatedEndpointDns"></a>

```go
func DedicatedEndpointDns() *string
```

- *Type:* *string

---

##### `DeployedModels`<sup>Required</sup> <a name="DeployedModels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.deployedModels"></a>

```go
func DeployedModels() GoogleVertexAiEndpointDeployedModelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList">GoogleVertexAiEndpointDeployedModelsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleVertexAiEndpointEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference">GoogleVertexAiEndpointEncryptionSpecOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ModelDeploymentMonitoringJob`<sup>Required</sup> <a name="ModelDeploymentMonitoringJob" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.modelDeploymentMonitoringJob"></a>

```go
func ModelDeploymentMonitoringJob() *string
```

- *Type:* *string

---

##### `PredictRequestResponseLoggingConfig`<sup>Required</sup> <a name="PredictRequestResponseLoggingConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.predictRequestResponseLoggingConfig"></a>

```go
func PredictRequestResponseLoggingConfig() GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference</a>

---

##### `PrivateServiceConnectConfig`<sup>Required</sup> <a name="PrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.privateServiceConnectConfig"></a>

```go
func PrivateServiceConnectConfig() GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference">GoogleVertexAiEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DedicatedEndpointEnabledInput`<sup>Optional</sup> <a name="DedicatedEndpointEnabledInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dedicatedEndpointEnabledInput"></a>

```go
func DedicatedEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleVertexAiEndpointEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PredictRequestResponseLoggingConfigInput`<sup>Optional</sup> <a name="PredictRequestResponseLoggingConfigInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.predictRequestResponseLoggingConfigInput"></a>

```go
func PredictRequestResponseLoggingConfigInput() GoogleVertexAiEndpointPredictRequestResponseLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig">GoogleVertexAiEndpointPredictRequestResponseLoggingConfig</a>

---

##### `PrivateServiceConnectConfigInput`<sup>Optional</sup> <a name="PrivateServiceConnectConfigInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.privateServiceConnectConfigInput"></a>

```go
func PrivateServiceConnectConfigInput() GoogleVertexAiEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig">GoogleVertexAiEndpointPrivateServiceConnectConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficSplitInput`<sup>Optional</sup> <a name="TrafficSplitInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.trafficSplitInput"></a>

```go
func TrafficSplitInput() *string
```

- *Type:* *string

---

##### `DedicatedEndpointEnabled`<sup>Required</sup> <a name="DedicatedEndpointEnabled" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.dedicatedEndpointEnabled"></a>

```go
func DedicatedEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TrafficSplit`<sup>Required</sup> <a name="TrafficSplit" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.trafficSplit"></a>

```go
func TrafficSplit() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiEndpointConfig <a name="GoogleVertexAiEndpointConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	Name: *string,
	DedicatedEndpointEnabled: interface{},
	Description: *string,
	EncryptionSpec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec,
	Id: *string,
	Labels: *map[string]*string,
	Network: *string,
	PredictRequestResponseLoggingConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig,
	PrivateServiceConnectConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts,
	TrafficSplit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the Endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.dedicatedEndpointEnabled">DedicatedEndpointEnabled</a></code> | <code>interface{}</code> | If true, the endpoint will be exposed through a dedicated DNS [Endpoint.dedicated_endpoint_dns]. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability. Note: Once you enabled dedicated endpoint, you won't be able to send request to the shared DNS {region}-aiplatform.googleapis.com. The limitation will be removed soon. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#id GoogleVertexAiEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize your Endpoints. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.network">Network</a></code> | <code>*string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. Only one of the fields, 'network' or 'privateServiceConnectConfig', can be set. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.predictRequestResponseLoggingConfig">PredictRequestResponseLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig">GoogleVertexAiEndpointPredictRequestResponseLoggingConfig</a></code> | predict_request_response_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig">GoogleVertexAiEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#project GoogleVertexAiEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.region">Region</a></code> | <code>*string</code> | The region for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.trafficSplit">TrafficSplit</a></code> | <code>*string</code> | A map from a DeployedModel's id to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required.

The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#display_name GoogleVertexAiEndpoint#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#location GoogleVertexAiEndpoint#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the Endpoint.

The name must be numeric with no leading zeros and can be at most 10 digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#name GoogleVertexAiEndpoint#name}

---

##### `DedicatedEndpointEnabled`<sup>Optional</sup> <a name="DedicatedEndpointEnabled" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.dedicatedEndpointEnabled"></a>

```go
DedicatedEndpointEnabled interface{}
```

- *Type:* interface{}

If true, the endpoint will be exposed through a dedicated DNS [Endpoint.dedicated_endpoint_dns]. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability. Note: Once you enabled dedicated endpoint, you won't be able to send request to the shared DNS {region}-aiplatform.googleapis.com. The limitation will be removed soon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#dedicated_endpoint_enabled GoogleVertexAiEndpoint#dedicated_endpoint_enabled}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#description GoogleVertexAiEndpoint#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleVertexAiEndpointEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#encryption_spec GoogleVertexAiEndpoint#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#id GoogleVertexAiEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize your Endpoints.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#labels GoogleVertexAiEndpoint#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. Only one of the fields, 'network' or 'privateServiceConnectConfig', can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#network GoogleVertexAiEndpoint#network}

---

##### `PredictRequestResponseLoggingConfig`<sup>Optional</sup> <a name="PredictRequestResponseLoggingConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.predictRequestResponseLoggingConfig"></a>

```go
PredictRequestResponseLoggingConfig GoogleVertexAiEndpointPredictRequestResponseLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig">GoogleVertexAiEndpointPredictRequestResponseLoggingConfig</a>

predict_request_response_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#predict_request_response_logging_config GoogleVertexAiEndpoint#predict_request_response_logging_config}

---

##### `PrivateServiceConnectConfig`<sup>Optional</sup> <a name="PrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.privateServiceConnectConfig"></a>

```go
PrivateServiceConnectConfig GoogleVertexAiEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig">GoogleVertexAiEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#private_service_connect_config GoogleVertexAiEndpoint#private_service_connect_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#project GoogleVertexAiEndpoint#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#region GoogleVertexAiEndpoint#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts">GoogleVertexAiEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#timeouts GoogleVertexAiEndpoint#timeouts}

---

##### `TrafficSplit`<sup>Optional</sup> <a name="TrafficSplit" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointConfig.property.trafficSplit"></a>

```go
TrafficSplit *string
```

- *Type:* *string

A map from a DeployedModel's id to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.

If a DeployedModel's id is not listed in this map, then it receives no traffic.
The traffic percentage values must add up to 100, or map must be empty if the Endpoint is to not accept any traffic at a moment. See
the 'deployModel' [example](https://cloud.google.com/vertex-ai/docs/general/deployment#deploy_a_model_to_an_endpoint) and
[documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.endpoints/deployModel) for more information.

~> **Note:** To set the map to empty, set '"{}"', apply, and then remove the field from your config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#traffic_split GoogleVertexAiEndpoint#traffic_split}

---

### GoogleVertexAiEndpointDeployedModels <a name="GoogleVertexAiEndpointDeployedModels" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointDeployedModels {

}
```


### GoogleVertexAiEndpointDeployedModelsAutomaticResources <a name="GoogleVertexAiEndpointDeployedModelsAutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources {

}
```


### GoogleVertexAiEndpointDeployedModelsDedicatedResources <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources {

}
```


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs {

}
```


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec {

}
```


### GoogleVertexAiEndpointDeployedModelsPrivateEndpoints <a name="GoogleVertexAiEndpointDeployedModelsPrivateEndpoints" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints {

}
```


### GoogleVertexAiEndpointEncryptionSpec <a name="GoogleVertexAiEndpointEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#kms_key_name GoogleVertexAiEndpoint#kms_key_name}

---

### GoogleVertexAiEndpointPredictRequestResponseLoggingConfig <a name="GoogleVertexAiEndpointPredictRequestResponseLoggingConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig {
	BigqueryDestination: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination,
	Enabled: interface{},
	SamplingRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If logging is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | Percentage of requests to be logged, expressed as a fraction in range(0,1]. |

---

##### `BigqueryDestination`<sup>Optional</sup> <a name="BigqueryDestination" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig.property.bigqueryDestination"></a>

```go
BigqueryDestination GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#bigquery_destination GoogleVertexAiEndpoint#bigquery_destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If logging is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#enabled GoogleVertexAiEndpoint#enabled}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig.property.samplingRate"></a>

```go
SamplingRate *f64
```

- *Type:* *f64

Percentage of requests to be logged, expressed as a fraction in range(0,1].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#sampling_rate GoogleVertexAiEndpoint#sampling_rate}

---

### GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination <a name="GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination {
	OutputUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination.property.outputUri">OutputUri</a></code> | <code>*string</code> | BigQuery URI to a project or table, up to 2000 characters long. |

---

##### `OutputUri`<sup>Optional</sup> <a name="OutputUri" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination.property.outputUri"></a>

```go
OutputUri *string
```

- *Type:* *string

BigQuery URI to a project or table, up to 2000 characters long.

When only the project is specified, the Dataset and Table is created. When the full table reference is specified, the Dataset must exist and table must not exist. Accepted forms: - BigQuery path. For example: 'bq://projectId' or 'bq://projectId.bqDatasetId' or 'bq://projectId.bqDatasetId.bqTableId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#output_uri GoogleVertexAiEndpoint#output_uri}

---

### GoogleVertexAiEndpointPrivateServiceConnectConfig <a name="GoogleVertexAiEndpointPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig {
	EnablePrivateServiceConnect: interface{},
	EnableSecurePrivateServiceConnect: interface{},
	ProjectAllowlist: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>interface{}</code> | Required. If true, expose the IndexEndpoint via private service connect. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig.property.enableSecurePrivateServiceConnect">EnableSecurePrivateServiceConnect</a></code> | <code>interface{}</code> | If set to true, enable secure private service connect with IAM authorization. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig.property.projectAllowlist">ProjectAllowlist</a></code> | <code>*[]*string</code> | A list of Projects from which the forwarding rule will target the service attachment. |

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```go
EnablePrivateServiceConnect interface{}
```

- *Type:* interface{}

Required. If true, expose the IndexEndpoint via private service connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#enable_private_service_connect GoogleVertexAiEndpoint#enable_private_service_connect}

---

##### `EnableSecurePrivateServiceConnect`<sup>Optional</sup> <a name="EnableSecurePrivateServiceConnect" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig.property.enableSecurePrivateServiceConnect"></a>

```go
EnableSecurePrivateServiceConnect interface{}
```

- *Type:* interface{}

If set to true, enable secure private service connect with IAM authorization.

Otherwise, private service connect will be done without authorization. Note latency will be slightly increased if authorization is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#enable_secure_private_service_connect GoogleVertexAiEndpoint#enable_secure_private_service_connect}

---

##### `ProjectAllowlist`<sup>Optional</sup> <a name="ProjectAllowlist" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```go
ProjectAllowlist *[]*string
```

- *Type:* *[]*string

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#project_allowlist GoogleVertexAiEndpoint#project_allowlist}

---

### GoogleVertexAiEndpointTimeouts <a name="GoogleVertexAiEndpointTimeouts" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

&googlevertexaiendpoint.GoogleVertexAiEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#create GoogleVertexAiEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#delete GoogleVertexAiEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#update GoogleVertexAiEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#create GoogleVertexAiEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#delete GoogleVertexAiEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_endpoint#update GoogleVertexAiEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList <a name="GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsAutomaticResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.get"></a>

```go
func Get(index *f64) GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference <a name="GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources">GoogleVertexAiEndpointDeployedModelsAutomaticResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointDeployedModelsAutomaticResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResources">GoogleVertexAiEndpointDeployedModelsAutomaticResources</a>

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">Target</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```go
func Target() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs</a>

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsDedicatedResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.get"></a>

```go
func Get(index *f64) GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get"></a>

```go
func Get(index *f64) GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec</a>

---


### GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference <a name="GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">AutoscalingMetricSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources">GoogleVertexAiEndpointDeployedModelsDedicatedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingMetricSpecs`<sup>Required</sup> <a name="AutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```go
func AutoscalingMetricSpecs() GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.machineSpec"></a>

```go
func MachineSpec() GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList</a>

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointDeployedModelsDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResources">GoogleVertexAiEndpointDeployedModelsDedicatedResources</a>

---


### GoogleVertexAiEndpointDeployedModelsList <a name="GoogleVertexAiEndpointDeployedModelsList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiEndpointDeployedModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiEndpointDeployedModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiEndpointDeployedModelsOutputReference <a name="GoogleVertexAiEndpointDeployedModelsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiEndpointDeployedModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.automaticResources">AutomaticResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList">GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.dedicatedResources">DedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.enableAccessLogging">EnableAccessLogging</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.enableContainerLogging">EnableContainerLogging</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.modelVersionId">ModelVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.privateEndpoints">PrivateEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList">GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.sharedResources">SharedResources</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModels">GoogleVertexAiEndpointDeployedModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticResources`<sup>Required</sup> <a name="AutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.automaticResources"></a>

```go
func AutomaticResources() GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList">GoogleVertexAiEndpointDeployedModelsAutomaticResourcesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DedicatedResources`<sup>Required</sup> <a name="DedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.dedicatedResources"></a>

```go
func DedicatedResources() GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList">GoogleVertexAiEndpointDeployedModelsDedicatedResourcesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableAccessLogging`<sup>Required</sup> <a name="EnableAccessLogging" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.enableAccessLogging"></a>

```go
func EnableAccessLogging() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableContainerLogging`<sup>Required</sup> <a name="EnableContainerLogging" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.enableContainerLogging"></a>

```go
func EnableContainerLogging() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `ModelVersionId`<sup>Required</sup> <a name="ModelVersionId" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.modelVersionId"></a>

```go
func ModelVersionId() *string
```

- *Type:* *string

---

##### `PrivateEndpoints`<sup>Required</sup> <a name="PrivateEndpoints" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.privateEndpoints"></a>

```go
func PrivateEndpoints() GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList">GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList</a>

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `SharedResources`<sup>Required</sup> <a name="SharedResources" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.sharedResources"></a>

```go
func SharedResources() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointDeployedModels
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModels">GoogleVertexAiEndpointDeployedModels</a>

---


### GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList <a name="GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsPrivateEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference <a name="GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.explainHttpUri">ExplainHttpUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.healthHttpUri">HealthHttpUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.predictHttpUri">PredictHttpUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints">GoogleVertexAiEndpointDeployedModelsPrivateEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExplainHttpUri`<sup>Required</sup> <a name="ExplainHttpUri" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.explainHttpUri"></a>

```go
func ExplainHttpUri() *string
```

- *Type:* *string

---

##### `HealthHttpUri`<sup>Required</sup> <a name="HealthHttpUri" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.healthHttpUri"></a>

```go
func HealthHttpUri() *string
```

- *Type:* *string

---

##### `PredictHttpUri`<sup>Required</sup> <a name="PredictHttpUri" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.predictHttpUri"></a>

```go
func PredictHttpUri() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointDeployedModelsPrivateEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointDeployedModelsPrivateEndpoints">GoogleVertexAiEndpointDeployedModelsPrivateEndpoints</a>

---


### GoogleVertexAiEndpointEncryptionSpecOutputReference <a name="GoogleVertexAiEndpointEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiEndpointEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointEncryptionSpec">GoogleVertexAiEndpointEncryptionSpec</a>

---


### GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference <a name="GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.resetOutputUri">ResetOutputUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutputUri` <a name="ResetOutputUri" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.resetOutputUri"></a>

```go
func ResetOutputUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.outputUriInput">OutputUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.outputUri">OutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutputUriInput`<sup>Optional</sup> <a name="OutputUriInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.outputUriInput"></a>

```go
func OutputUriInput() *string
```

- *Type:* *string

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.outputUri"></a>

```go
func OutputUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination</a>

---


### GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference <a name="GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.putBigqueryDestination">PutBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.resetBigqueryDestination">ResetBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryDestination` <a name="PutBigqueryDestination" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.putBigqueryDestination"></a>

```go
func PutBigqueryDestination(value GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination</a>

---

##### `ResetBigqueryDestination` <a name="ResetBigqueryDestination" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.resetBigqueryDestination"></a>

```go
func ResetBigqueryDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.resetSamplingRate"></a>

```go
func ResetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.bigqueryDestinationInput">BigqueryDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.samplingRateInput">SamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig">GoogleVertexAiEndpointPredictRequestResponseLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BigqueryDestination`<sup>Required</sup> <a name="BigqueryDestination" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.bigqueryDestination"></a>

```go
func BigqueryDestination() GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference</a>

---

##### `BigqueryDestinationInput`<sup>Optional</sup> <a name="BigqueryDestinationInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.bigqueryDestinationInput"></a>

```go
func BigqueryDestinationInput() GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination">GoogleVertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.samplingRateInput"></a>

```go
func SamplingRateInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.samplingRate"></a>

```go
func SamplingRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointPredictRequestResponseLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPredictRequestResponseLoggingConfig">GoogleVertexAiEndpointPredictRequestResponseLoggingConfig</a>

---


### GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference <a name="GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.resetEnableSecurePrivateServiceConnect">ResetEnableSecurePrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">ResetProjectAllowlist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableSecurePrivateServiceConnect` <a name="ResetEnableSecurePrivateServiceConnect" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.resetEnableSecurePrivateServiceConnect"></a>

```go
func ResetEnableSecurePrivateServiceConnect()
```

##### `ResetProjectAllowlist` <a name="ResetProjectAllowlist" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```go
func ResetProjectAllowlist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">EnablePrivateServiceConnectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.enableSecurePrivateServiceConnectInput">EnableSecurePrivateServiceConnectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">ProjectAllowlistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.enableSecurePrivateServiceConnect">EnableSecurePrivateServiceConnect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">ProjectAllowlist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig">GoogleVertexAiEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnablePrivateServiceConnectInput`<sup>Optional</sup> <a name="EnablePrivateServiceConnectInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```go
func EnablePrivateServiceConnectInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSecurePrivateServiceConnectInput`<sup>Optional</sup> <a name="EnableSecurePrivateServiceConnectInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.enableSecurePrivateServiceConnectInput"></a>

```go
func EnableSecurePrivateServiceConnectInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectAllowlistInput`<sup>Optional</sup> <a name="ProjectAllowlistInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```go
func ProjectAllowlistInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```go
func EnablePrivateServiceConnect() interface{}
```

- *Type:* interface{}

---

##### `EnableSecurePrivateServiceConnect`<sup>Required</sup> <a name="EnableSecurePrivateServiceConnect" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.enableSecurePrivateServiceConnect"></a>

```go
func EnableSecurePrivateServiceConnect() interface{}
```

- *Type:* interface{}

---

##### `ProjectAllowlist`<sup>Required</sup> <a name="ProjectAllowlist" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```go
func ProjectAllowlist() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointPrivateServiceConnectConfig">GoogleVertexAiEndpointPrivateServiceConnectConfig</a>

---


### GoogleVertexAiEndpointTimeoutsOutputReference <a name="GoogleVertexAiEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiendpoint"

googlevertexaiendpoint.NewGoogleVertexAiEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiEndpoint.GoogleVertexAiEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



