# `googleVertexAiIndexEndpointDeployedIndex` Submodule <a name="`googleVertexAiIndexEndpointDeployedIndex` Submodule" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiIndexEndpointDeployedIndex <a name="GoogleVertexAiIndexEndpointDeployedIndex" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index google_vertex_ai_index_endpoint_deployed_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndex(scope Construct, id *string, config GoogleVertexAiIndexEndpointDeployedIndexConfig) GoogleVertexAiIndexEndpointDeployedIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig">GoogleVertexAiIndexEndpointDeployedIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig">GoogleVertexAiIndexEndpointDeployedIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putAutomaticResources">PutAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDedicatedResources">PutDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig">PutDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetAutomaticResources">ResetAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDedicatedResources">ResetDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDeployedIndexAuthConfig">ResetDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDeploymentGroup">ResetDeploymentGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetEnableAccessLogging">ResetEnableAccessLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomaticResources` <a name="PutAutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putAutomaticResources"></a>

```go
func PutAutomaticResources(value GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putAutomaticResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---

##### `PutDedicatedResources` <a name="PutDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDedicatedResources"></a>

```go
func PutDedicatedResources(value GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDedicatedResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---

##### `PutDeployedIndexAuthConfig` <a name="PutDeployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig"></a>

```go
func PutDeployedIndexAuthConfig(value GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiIndexEndpointDeployedIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a>

---

##### `ResetAutomaticResources` <a name="ResetAutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetAutomaticResources"></a>

```go
func ResetAutomaticResources()
```

##### `ResetDedicatedResources` <a name="ResetDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDedicatedResources"></a>

```go
func ResetDedicatedResources()
```

##### `ResetDeployedIndexAuthConfig` <a name="ResetDeployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDeployedIndexAuthConfig"></a>

```go
func ResetDeployedIndexAuthConfig()
```

##### `ResetDeploymentGroup` <a name="ResetDeploymentGroup" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDeploymentGroup"></a>

```go
func ResetDeploymentGroup()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnableAccessLogging` <a name="ResetEnableAccessLogging" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetEnableAccessLogging"></a>

```go
func ResetEnableAccessLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetReservedIpRanges"></a>

```go
func ResetReservedIpRanges()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiIndexEndpointDeployedIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleVertexAiIndexEndpointDeployedIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiIndexEndpointDeployedIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiIndexEndpointDeployedIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiIndexEndpointDeployedIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.automaticResources">AutomaticResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dedicatedResources">DedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfig">DeployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexSyncTime">IndexSyncTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.privateEndpoints">PrivateEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference">GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.automaticResourcesInput">AutomaticResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dedicatedResourcesInput">DedicatedResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfigInput">DeployedIndexAuthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexIdInput">DeployedIndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deploymentGroupInput">DeploymentGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.enableAccessLoggingInput">EnableAccessLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexEndpointInput">IndexEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexId">DeployedIndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deploymentGroup">DeploymentGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.enableAccessLogging">EnableAccessLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexEndpoint">IndexEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomaticResources`<sup>Required</sup> <a name="AutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.automaticResources"></a>

```go
func AutomaticResources() GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DedicatedResources`<sup>Required</sup> <a name="DedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dedicatedResources"></a>

```go
func DedicatedResources() GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference</a>

---

##### `DeployedIndexAuthConfig`<sup>Required</sup> <a name="DeployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfig"></a>

```go
func DeployedIndexAuthConfig() GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference</a>

---

##### `IndexSyncTime`<sup>Required</sup> <a name="IndexSyncTime" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexSyncTime"></a>

```go
func IndexSyncTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateEndpoints`<sup>Required</sup> <a name="PrivateEndpoints" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.privateEndpoints"></a>

```go
func PrivateEndpoints() GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference">GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference</a>

---

##### `AutomaticResourcesInput`<sup>Optional</sup> <a name="AutomaticResourcesInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.automaticResourcesInput"></a>

```go
func AutomaticResourcesInput() GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---

##### `DedicatedResourcesInput`<sup>Optional</sup> <a name="DedicatedResourcesInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.dedicatedResourcesInput"></a>

```go
func DedicatedResourcesInput() GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---

##### `DeployedIndexAuthConfigInput`<sup>Optional</sup> <a name="DeployedIndexAuthConfigInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfigInput"></a>

```go
func DeployedIndexAuthConfigInput() GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---

##### `DeployedIndexIdInput`<sup>Optional</sup> <a name="DeployedIndexIdInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexIdInput"></a>

```go
func DeployedIndexIdInput() *string
```

- *Type:* *string

---

##### `DeploymentGroupInput`<sup>Optional</sup> <a name="DeploymentGroupInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deploymentGroupInput"></a>

```go
func DeploymentGroupInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableAccessLoggingInput`<sup>Optional</sup> <a name="EnableAccessLoggingInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.enableAccessLoggingInput"></a>

```go
func EnableAccessLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexEndpointInput`<sup>Optional</sup> <a name="IndexEndpointInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexEndpointInput"></a>

```go
func IndexEndpointInput() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.reservedIpRangesInput"></a>

```go
func ReservedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeployedIndexId`<sup>Required</sup> <a name="DeployedIndexId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deployedIndexId"></a>

```go
func DeployedIndexId() *string
```

- *Type:* *string

---

##### `DeploymentGroup`<sup>Required</sup> <a name="DeploymentGroup" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.deploymentGroup"></a>

```go
func DeploymentGroup() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableAccessLogging`<sup>Required</sup> <a name="EnableAccessLogging" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.enableAccessLogging"></a>

```go
func EnableAccessLogging() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.indexEndpoint"></a>

```go
func IndexEndpoint() *string
```

- *Type:* *string

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.reservedIpRanges"></a>

```go
func ReservedIpRanges() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources <a name="GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

&googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources {
	MaxReplicaCount: *f64,
	MinReplicaCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | The minimum number of replicas this DeployedModel will be always deployed on. |

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.property.maxReplicaCount"></a>

```go
MaxReplicaCount *f64
```

- *Type:* *f64

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If maxReplicaCount is not set, the default value is minReplicaCount. The max allowed replica count is 1000.

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, a no upper bound for scaling under heavy traffic will be assume, though Vertex AI may be unable to scale beyond certain replica number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#max_replica_count GoogleVertexAiIndexEndpointDeployedIndex#max_replica_count}

---

##### `MinReplicaCount`<sup>Optional</sup> <a name="MinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources.property.minReplicaCount"></a>

```go
MinReplicaCount *f64
```

- *Type:* *f64

The minimum number of replicas this DeployedModel will be always deployed on.

If minReplicaCount is not set, the default value is 2 (we don't provide SLA when minReplicaCount=1).

If traffic against it increases, it may dynamically be deployed onto more replicas up to [maxReplicaCount](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/AutomaticResources#FIELDS.max_replica_count), and as traffic decreases, some of these extra replicas may be freed. If the requested value is too large, the deployment will error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#min_replica_count GoogleVertexAiIndexEndpointDeployedIndex#min_replica_count}

---

### GoogleVertexAiIndexEndpointDeployedIndexConfig <a name="GoogleVertexAiIndexEndpointDeployedIndexConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

&googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeployedIndexId: *string,
	Index: *string,
	IndexEndpoint: *string,
	AutomaticResources: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources,
	DedicatedResources: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources,
	DeployedIndexAuthConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig,
	DeploymentGroup: *string,
	DisplayName: *string,
	EnableAccessLogging: interface{},
	Id: *string,
	ReservedIpRanges: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexId">DeployedIndexId</a></code> | <code>*string</code> | The user specified ID of the DeployedIndex. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.index">Index</a></code> | <code>*string</code> | The name of the Index this is the deployment of. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.indexEndpoint">IndexEndpoint</a></code> | <code>*string</code> | Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.automaticResources">AutomaticResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | automatic_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.dedicatedResources">DedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexAuthConfig">DeployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | deployed_index_auth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deploymentGroup">DeploymentGroup</a></code> | <code>*string</code> | The deployment group can be no longer than 64 characters (eg: 'test', 'prod'). |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.enableAccessLogging">EnableAccessLogging</a></code> | <code>interface{}</code> | If true, private endpoint's access logs are sent to Cloud Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#id GoogleVertexAiIndexEndpointDeployedIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeployedIndexId`<sup>Required</sup> <a name="DeployedIndexId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexId"></a>

```go
DeployedIndexId *string
```

- *Type:* *string

The user specified ID of the DeployedIndex.

The ID can be up to 128 characters long and must start with a letter and only contain letters, numbers, and underscores. The ID must be unique within the project it is created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#deployed_index_id GoogleVertexAiIndexEndpointDeployedIndex#deployed_index_id}

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.index"></a>

```go
Index *string
```

- *Type:* *string

The name of the Index this is the deployment of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#index GoogleVertexAiIndexEndpointDeployedIndex#index}

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.indexEndpoint"></a>

```go
IndexEndpoint *string
```

- *Type:* *string

Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#index_endpoint GoogleVertexAiIndexEndpointDeployedIndex#index_endpoint}

---

##### `AutomaticResources`<sup>Optional</sup> <a name="AutomaticResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.automaticResources"></a>

```go
AutomaticResources GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a>

automatic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#automatic_resources GoogleVertexAiIndexEndpointDeployedIndex#automatic_resources}

---

##### `DedicatedResources`<sup>Optional</sup> <a name="DedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.dedicatedResources"></a>

```go
DedicatedResources GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#dedicated_resources GoogleVertexAiIndexEndpointDeployedIndex#dedicated_resources}

---

##### `DeployedIndexAuthConfig`<sup>Optional</sup> <a name="DeployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexAuthConfig"></a>

```go
DeployedIndexAuthConfig GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

deployed_index_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#deployed_index_auth_config GoogleVertexAiIndexEndpointDeployedIndex#deployed_index_auth_config}

---

##### `DeploymentGroup`<sup>Optional</sup> <a name="DeploymentGroup" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.deploymentGroup"></a>

```go
DeploymentGroup *string
```

- *Type:* *string

The deployment group can be no longer than 64 characters (eg: 'test', 'prod').

If not set, we will use the 'default' deployment group.
Creating deployment_groups with reserved_ip_ranges is a recommended practice when the peered network has multiple peering ranges. This creates your deployments from predictable IP spaces for easier traffic administration. Also, one deployment_group (except 'default') can only be used with the same reserved_ip_ranges which means if the deployment_group has been used with reserved_ip_ranges: [a, b, c], using it with [a, b] or [d, e] is disallowed. [See the official documentation here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.indexEndpoints#DeployedIndex.FIELDS.deployment_group).
Note: we only support up to 5 deployment groups (not including 'default').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#deployment_group GoogleVertexAiIndexEndpointDeployedIndex#deployment_group}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#display_name GoogleVertexAiIndexEndpointDeployedIndex#display_name}

---

##### `EnableAccessLogging`<sup>Optional</sup> <a name="EnableAccessLogging" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.enableAccessLogging"></a>

```go
EnableAccessLogging interface{}
```

- *Type:* interface{}

If true, private endpoint's access logs are sent to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#enable_access_logging GoogleVertexAiIndexEndpointDeployedIndex#enable_access_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#id GoogleVertexAiIndexEndpointDeployedIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.reservedIpRanges"></a>

```go
ReservedIpRanges *[]*string
```

- *Type:* *[]*string

A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex.

If set, we will deploy the index within the provided ip ranges. Otherwise, the index might be deployed to any ip ranges under the provided VPC network.

The value should be the name of the address (https://cloud.google.com/compute/docs/reference/rest/v1/addresses) Example: ['vertex-ai-ip-range'].

For more information about subnets and network IP ranges, please see https://cloud.google.com/vpc/docs/subnets#manually_created_subnet_ip_ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#reserved_ip_ranges GoogleVertexAiIndexEndpointDeployedIndex#reserved_ip_ranges}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiIndexEndpointDeployedIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts">GoogleVertexAiIndexEndpointDeployedIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#timeouts GoogleVertexAiIndexEndpointDeployedIndex#timeouts}

---

### GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources <a name="GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

&googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources {
	MachineSpec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec,
	MinReplicaCount: *f64,
	MaxReplicaCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.machineSpec"></a>

```go
MachineSpec GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#machine_spec GoogleVertexAiIndexEndpointDeployedIndex#machine_spec}

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.minReplicaCount"></a>

```go
MinReplicaCount *f64
```

- *Type:* *f64

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#min_replica_count GoogleVertexAiIndexEndpointDeployedIndex#min_replica_count}

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources.property.maxReplicaCount"></a>

```go
MaxReplicaCount *f64
```

- *Type:* *f64

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If maxReplicaCount is not set, the default value is minReplicaCount

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#max_replica_count GoogleVertexAiIndexEndpointDeployedIndex#max_replica_count}

---

### GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec <a name="GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

&googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec {
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.property.machineType">MachineType</a></code> | <code>*string</code> | The type of the machine. |

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The type of the machine.

See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

For [DeployedModel](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.endpoints#DeployedModel) this field is optional, and the default value is n1-standard-2. For [BatchPredictionJob](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.batchPredictionJobs#BatchPredictionJob) or as part of [WorkerPoolSpec](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/CustomJobSpec#WorkerPoolSpec) this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#machine_type GoogleVertexAiIndexEndpointDeployedIndex#machine_type}

---

### GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig <a name="GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

&googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig {
	AuthProvider: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.property.authProvider">AuthProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | auth_provider block. |

---

##### `AuthProvider`<sup>Optional</sup> <a name="AuthProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.property.authProvider"></a>

```go
AuthProvider GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#auth_provider GoogleVertexAiIndexEndpointDeployedIndex#auth_provider}

---

### GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider <a name="GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

&googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider {
	AllowedIssuers: *[]*string,
	Audiences: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.allowedIssuers">AllowedIssuers</a></code> | <code>*[]*string</code> | A list of allowed JWT issuers. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.audiences">Audiences</a></code> | <code>*[]*string</code> | The list of JWT audiences. |

---

##### `AllowedIssuers`<sup>Optional</sup> <a name="AllowedIssuers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.allowedIssuers"></a>

```go
AllowedIssuers *[]*string
```

- *Type:* *[]*string

A list of allowed JWT issuers.

Each entry must be a valid Google service account, in the following format: service-account-name@project-id.iam.gserviceaccount.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#allowed_issuers GoogleVertexAiIndexEndpointDeployedIndex#allowed_issuers}

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.audiences"></a>

```go
Audiences *[]*string
```

- *Type:* *[]*string

The list of JWT audiences.

that are allowed to access. A JWT containing any of these audiences will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#audiences GoogleVertexAiIndexEndpointDeployedIndex#audiences}

---

### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

&googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints {

}
```


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

&googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints {

}
```


### GoogleVertexAiIndexEndpointDeployedIndexTimeouts <a name="GoogleVertexAiIndexEndpointDeployedIndexTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

&googlevertexaiindexendpointdeployedindex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#create GoogleVertexAiIndexEndpointDeployedIndex#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#delete GoogleVertexAiIndexEndpointDeployedIndex#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#update GoogleVertexAiIndexEndpointDeployedIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#create GoogleVertexAiIndexEndpointDeployedIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#delete GoogleVertexAiIndexEndpointDeployedIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_vertex_ai_index_endpoint_deployed_index#update GoogleVertexAiIndexEndpointDeployedIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMinReplicaCount">ResetMinReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMaxReplicaCount"></a>

```go
func ResetMaxReplicaCount()
```

##### `ResetMinReplicaCount` <a name="ResetMinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMinReplicaCount"></a>

```go
func ResetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCountInput"></a>

```go
func MaxReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCountInput"></a>

```go
func MinReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources">GoogleVertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec"></a>

```go
func PutMachineSpec(value GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```go
func ResetMaxReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpec"></a>

```go
func MachineSpec() GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference</a>

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```go
func MachineSpecInput() GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```go
func MaxReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```go
func MinReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources">GoogleVertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAllowedIssuers">ResetAllowedIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedIssuers` <a name="ResetAllowedIssuers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAllowedIssuers"></a>

```go
func ResetAllowedIssuers()
```

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAudiences"></a>

```go
func ResetAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuersInput">AllowedIssuersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuers">AllowedIssuers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiences">Audiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedIssuersInput`<sup>Optional</sup> <a name="AllowedIssuersInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuersInput"></a>

```go
func AllowedIssuersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiencesInput"></a>

```go
func AudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedIssuers`<sup>Required</sup> <a name="AllowedIssuers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuers"></a>

```go
func AllowedIssuers() *[]*string
```

- *Type:* *[]*string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiences"></a>

```go
func Audiences() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider">PutAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resetAuthProvider">ResetAuthProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthProvider` <a name="PutAuthProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider"></a>

```go
func PutAuthProvider(value GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---

##### `ResetAuthProvider` <a name="ResetAuthProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resetAuthProvider"></a>

```go
func ResetAuthProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProvider">AuthProvider</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProviderInput">AuthProviderInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthProvider`<sup>Required</sup> <a name="AuthProvider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProvider"></a>

```go
func AuthProvider() GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference</a>

---

##### `AuthProviderInput`<sup>Optional</sup> <a name="AuthProviderInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProviderInput"></a>

```go
func AuthProviderInput() GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">GoogleVertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.matchGrpcAddress">MatchGrpcAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.pscAutomatedEndpoints">PscAutomatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchGrpcAddress`<sup>Required</sup> <a name="MatchGrpcAddress" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.matchGrpcAddress"></a>

```go
func MatchGrpcAddress() *string
```

- *Type:* *string

---

##### `PscAutomatedEndpoints`<sup>Required</sup> <a name="PscAutomatedEndpoints" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.pscAutomatedEndpoints"></a>

```go
func PscAutomatedEndpoints() GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList</a>

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpoints</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.matchAddress">MatchAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchAddress`<sup>Required</sup> <a name="MatchAddress" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.matchAddress"></a>

```go
func MatchAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints">GoogleVertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints</a>

---


### GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference <a name="GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindexendpointdeployedindex"

googlevertexaiindexendpointdeployedindex.NewGoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpointDeployedIndex.GoogleVertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



