# `googleVertexAiFeatureOnlineStoreFeatureview` Submodule <a name="`googleVertexAiFeatureOnlineStoreFeatureview` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureview <a name="GoogleVertexAiFeatureOnlineStoreFeatureview" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview google_vertex_ai_feature_online_store_featureview}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureview(scope Construct, id *string, config GoogleVertexAiFeatureOnlineStoreFeatureviewConfig) GoogleVertexAiFeatureOnlineStoreFeatureview
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putBigQuerySource">PutBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource">PutFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putSyncConfig">PutSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putVectorSearchConfig">PutVectorSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource">ResetBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource">ResetFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetSyncConfig">ResetSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetVectorSearchConfig">ResetVectorSearchConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigQuerySource` <a name="PutBigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putBigQuerySource"></a>

```go
func PutBigQuerySource(value GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putBigQuerySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---

##### `PutFeatureRegistrySource` <a name="PutFeatureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource"></a>

```go
func PutFeatureRegistrySource(value GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---

##### `PutSyncConfig` <a name="PutSyncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putSyncConfig"></a>

```go
func PutSyncConfig(value GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

---

##### `PutVectorSearchConfig` <a name="PutVectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putVectorSearchConfig"></a>

```go
func PutVectorSearchConfig(value GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.putVectorSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a>

---

##### `ResetBigQuerySource` <a name="ResetBigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource"></a>

```go
func ResetBigQuerySource()
```

##### `ResetFeatureRegistrySource` <a name="ResetFeatureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource"></a>

```go
func ResetFeatureRegistrySource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSyncConfig` <a name="ResetSyncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetSyncConfig"></a>

```go
func ResetSyncConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVectorSearchConfig` <a name="ResetVectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.resetVectorSearchConfig"></a>

```go
func ResetVectorSearchConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStoreFeatureview to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiFeatureOnlineStoreFeatureview that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStoreFeatureview to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource">BigQuerySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource">FeatureRegistrySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.vectorSearchConfig">VectorSearchConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput">BigQuerySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput">FeatureOnlineStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput">FeatureRegistrySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput">SyncConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.vectorSearchConfigInput">VectorSearchConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore">FeatureOnlineStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigQuerySource`<sup>Required</sup> <a name="BigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource"></a>

```go
func BigQuerySource() GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FeatureRegistrySource`<sup>Required</sup> <a name="FeatureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource"></a>

```go
func FeatureRegistrySource() GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a>

---

##### `SyncConfig`<sup>Required</sup> <a name="SyncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.syncConfig"></a>

```go
func SyncConfig() GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VectorSearchConfig`<sup>Required</sup> <a name="VectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.vectorSearchConfig"></a>

```go
func VectorSearchConfig() GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference</a>

---

##### `BigQuerySourceInput`<sup>Optional</sup> <a name="BigQuerySourceInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput"></a>

```go
func BigQuerySourceInput() GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---

##### `FeatureOnlineStoreInput`<sup>Optional</sup> <a name="FeatureOnlineStoreInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput"></a>

```go
func FeatureOnlineStoreInput() *string
```

- *Type:* *string

---

##### `FeatureRegistrySourceInput`<sup>Optional</sup> <a name="FeatureRegistrySourceInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput"></a>

```go
func FeatureRegistrySourceInput() GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SyncConfigInput`<sup>Optional</sup> <a name="SyncConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput"></a>

```go
func SyncConfigInput() GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VectorSearchConfigInput`<sup>Optional</sup> <a name="VectorSearchConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.vectorSearchConfigInput"></a>

```go
func VectorSearchConfigInput() GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a>

---

##### `FeatureOnlineStore`<sup>Required</sup> <a name="FeatureOnlineStore" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore"></a>

```go
func FeatureOnlineStore() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureview.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

&googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource {
	EntityIdColumns: *[]*string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns">EntityIdColumns</a></code> | <code>*[]*string</code> | Columns to construct entityId / row keys. Start by supporting 1 only. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri">Uri</a></code> | <code>*string</code> | The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig. |

---

##### `EntityIdColumns`<sup>Required</sup> <a name="EntityIdColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns"></a>

```go
EntityIdColumns *[]*string
```

- *Type:* *[]*string

Columns to construct entityId / row keys. Start by supporting 1 only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#entity_id_columns GoogleVertexAiFeatureOnlineStoreFeatureview#entity_id_columns}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#uri GoogleVertexAiFeatureOnlineStoreFeatureview#uri}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

&googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FeatureOnlineStore: *string,
	Region: *string,
	BigQuerySource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource,
	FeatureRegistrySource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource,
	Id: *string,
	Labels: *map[string]*string,
	Name: *string,
	Project: *string,
	SyncConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts,
	VectorSearchConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore">FeatureOnlineStore</a></code> | <code>*string</code> | The name of the FeatureOnlineStore to use for the featureview. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.region">Region</a></code> | <code>*string</code> | The region for the resource. It should be the same as the featureonlinestore region. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource">BigQuerySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | big_query_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource">FeatureRegistrySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | feature_registry_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#id GoogleVertexAiFeatureOnlineStoreFeatureview#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to this FeatureView. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.name">Name</a></code> | <code>*string</code> | Name of the FeatureView. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#project GoogleVertexAiFeatureOnlineStoreFeatureview#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | sync_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.vectorSearchConfig">VectorSearchConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a></code> | vector_search_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FeatureOnlineStore`<sup>Required</sup> <a name="FeatureOnlineStore" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore"></a>

```go
FeatureOnlineStore *string
```

- *Type:* *string

The name of the FeatureOnlineStore to use for the featureview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureview#feature_online_store}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region for the resource. It should be the same as the featureonlinestore region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#region GoogleVertexAiFeatureOnlineStoreFeatureview#region}

---

##### `BigQuerySource`<sup>Optional</sup> <a name="BigQuerySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource"></a>

```go
BigQuerySource GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

big_query_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#big_query_source GoogleVertexAiFeatureOnlineStoreFeatureview#big_query_source}

---

##### `FeatureRegistrySource`<sup>Optional</sup> <a name="FeatureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource"></a>

```go
FeatureRegistrySource GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

feature_registry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_registry_source GoogleVertexAiFeatureOnlineStoreFeatureview#feature_registry_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#id GoogleVertexAiFeatureOnlineStoreFeatureview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to this FeatureView.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#labels GoogleVertexAiFeatureOnlineStoreFeatureview#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the FeatureView.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#name GoogleVertexAiFeatureOnlineStoreFeatureview#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#project GoogleVertexAiFeatureOnlineStoreFeatureview#project}.

---

##### `SyncConfig`<sup>Optional</sup> <a name="SyncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig"></a>

```go
SyncConfig GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#sync_config GoogleVertexAiFeatureOnlineStoreFeatureview#sync_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts">GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#timeouts GoogleVertexAiFeatureOnlineStoreFeatureview#timeouts}

---

##### `VectorSearchConfig`<sup>Optional</sup> <a name="VectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewConfig.property.vectorSearchConfig"></a>

```go
VectorSearchConfig GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a>

vector_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#vector_search_config GoogleVertexAiFeatureOnlineStoreFeatureview#vector_search_config}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

&googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource {
	FeatureGroups: interface{},
	ProjectNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups">FeatureGroups</a></code> | <code>interface{}</code> | feature_groups block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.projectNumber">ProjectNumber</a></code> | <code>*string</code> | The project number of the parent project of the feature Groups. |

---

##### `FeatureGroups`<sup>Required</sup> <a name="FeatureGroups" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups"></a>

```go
FeatureGroups interface{}
```

- *Type:* interface{}

feature_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_groups GoogleVertexAiFeatureOnlineStoreFeatureview#feature_groups}

---

##### `ProjectNumber`<sup>Optional</sup> <a name="ProjectNumber" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.projectNumber"></a>

```go
ProjectNumber *string
```

- *Type:* *string

The project number of the parent project of the feature Groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#project_number GoogleVertexAiFeatureOnlineStoreFeatureview#project_number}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

&googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups {
	FeatureGroupId: *string,
	FeatureIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId">FeatureGroupId</a></code> | <code>*string</code> | Identifier of the feature group. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds">FeatureIds</a></code> | <code>*[]*string</code> | Identifiers of features under the feature group. |

---

##### `FeatureGroupId`<sup>Required</sup> <a name="FeatureGroupId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId"></a>

```go
FeatureGroupId *string
```

- *Type:* *string

Identifier of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_group_id GoogleVertexAiFeatureOnlineStoreFeatureview#feature_group_id}

---

##### `FeatureIds`<sup>Required</sup> <a name="FeatureIds" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds"></a>

```go
FeatureIds *[]*string
```

- *Type:* *[]*string

Identifiers of features under the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#feature_ids GoogleVertexAiFeatureOnlineStoreFeatureview#feature_ids}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

&googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig {
	Cron: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron">Cron</a></code> | <code>*string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". |

---

##### `Cron`<sup>Optional</sup> <a name="Cron" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron"></a>

```go
Cron *string
```

- *Type:* *string

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#cron GoogleVertexAiFeatureOnlineStoreFeatureview#cron}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

&googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#create GoogleVertexAiFeatureOnlineStoreFeatureview#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#delete GoogleVertexAiFeatureOnlineStoreFeatureview#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#update GoogleVertexAiFeatureOnlineStoreFeatureview#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#create GoogleVertexAiFeatureOnlineStoreFeatureview#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#delete GoogleVertexAiFeatureOnlineStoreFeatureview#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#update GoogleVertexAiFeatureOnlineStoreFeatureview#update}.

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

&googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig {
	EmbeddingColumn: *string,
	BruteForceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig,
	CrowdingColumn: *string,
	DistanceMeasureType: *string,
	EmbeddingDimension: *f64,
	FilterColumns: *[]*string,
	TreeAhConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.embeddingColumn">EmbeddingColumn</a></code> | <code>*string</code> | Column of embedding. This column contains the source data to create index for vector search. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.bruteForceConfig">BruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a></code> | brute_force_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.crowdingColumn">CrowdingColumn</a></code> | <code>*string</code> | Column of crowding. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.distanceMeasureType">DistanceMeasureType</a></code> | <code>*string</code> | The distance measure used in nearest neighbor search. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.embeddingDimension">EmbeddingDimension</a></code> | <code>*f64</code> | The number of dimensions of the input embedding. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.filterColumns">FilterColumns</a></code> | <code>*[]*string</code> | Columns of features that are used to filter vector search results. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.treeAhConfig">TreeAhConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a></code> | tree_ah_config block. |

---

##### `EmbeddingColumn`<sup>Required</sup> <a name="EmbeddingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.embeddingColumn"></a>

```go
EmbeddingColumn *string
```

- *Type:* *string

Column of embedding. This column contains the source data to create index for vector search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#embedding_column GoogleVertexAiFeatureOnlineStoreFeatureview#embedding_column}

---

##### `BruteForceConfig`<sup>Optional</sup> <a name="BruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.bruteForceConfig"></a>

```go
BruteForceConfig GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a>

brute_force_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#brute_force_config GoogleVertexAiFeatureOnlineStoreFeatureview#brute_force_config}

---

##### `CrowdingColumn`<sup>Optional</sup> <a name="CrowdingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.crowdingColumn"></a>

```go
CrowdingColumn *string
```

- *Type:* *string

Column of crowding.

This column contains crowding attribute which is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than some value k' of the k neighbors returned have the same value of crowdingAttribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#crowding_column GoogleVertexAiFeatureOnlineStoreFeatureview#crowding_column}

---

##### `DistanceMeasureType`<sup>Optional</sup> <a name="DistanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.distanceMeasureType"></a>

```go
DistanceMeasureType *string
```

- *Type:* *string

The distance measure used in nearest neighbor search.

For details on allowed values, see the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.featureOnlineStores.featureViews#DistanceMeasureType). Possible values: ["SQUARED_L2_DISTANCE", "COSINE_DISTANCE", "DOT_PRODUCT_DISTANCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#distance_measure_type GoogleVertexAiFeatureOnlineStoreFeatureview#distance_measure_type}

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.embeddingDimension"></a>

```go
EmbeddingDimension *f64
```

- *Type:* *f64

The number of dimensions of the input embedding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#embedding_dimension GoogleVertexAiFeatureOnlineStoreFeatureview#embedding_dimension}

---

##### `FilterColumns`<sup>Optional</sup> <a name="FilterColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.filterColumns"></a>

```go
FilterColumns *[]*string
```

- *Type:* *[]*string

Columns of features that are used to filter vector search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#filter_columns GoogleVertexAiFeatureOnlineStoreFeatureview#filter_columns}

---

##### `TreeAhConfig`<sup>Optional</sup> <a name="TreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig.property.treeAhConfig"></a>

```go
TreeAhConfig GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a>

tree_ah_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#tree_ah_config GoogleVertexAiFeatureOnlineStoreFeatureview#tree_ah_config}

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

&googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig {

}
```


### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

&googlevertexaifeatureonlinestorefeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig {
	LeafNodeEmbeddingCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig.property.leafNodeEmbeddingCount">LeafNodeEmbeddingCount</a></code> | <code>*string</code> | Number of embeddings on each leaf node. The default value is 1000 if not set. |

---

##### `LeafNodeEmbeddingCount`<sup>Optional</sup> <a name="LeafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig.property.leafNodeEmbeddingCount"></a>

```go
LeafNodeEmbeddingCount *string
```

- *Type:* *string

Number of embeddings on each leaf node. The default value is 1000 if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_online_store_featureview#leaf_node_embedding_count GoogleVertexAiFeatureOnlineStoreFeatureview#leaf_node_embedding_count}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput">EntityIdColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns">EntityIdColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdColumnsInput`<sup>Optional</sup> <a name="EntityIdColumnsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput"></a>

```go
func EntityIdColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `EntityIdColumns`<sup>Required</sup> <a name="EntityIdColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns"></a>

```go
func EntityIdColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource">GoogleVertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput">FeatureGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput">FeatureIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId">FeatureGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds">FeatureIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureGroupIdInput`<sup>Optional</sup> <a name="FeatureGroupIdInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput"></a>

```go
func FeatureGroupIdInput() *string
```

- *Type:* *string

---

##### `FeatureIdsInput`<sup>Optional</sup> <a name="FeatureIdsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput"></a>

```go
func FeatureIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FeatureGroupId`<sup>Required</sup> <a name="FeatureGroupId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId"></a>

```go
func FeatureGroupId() *string
```

- *Type:* *string

---

##### `FeatureIds`<sup>Required</sup> <a name="FeatureIds" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds"></a>

```go
func FeatureIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups">PutFeatureGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resetProjectNumber">ResetProjectNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFeatureGroups` <a name="PutFeatureGroups" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups"></a>

```go
func PutFeatureGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProjectNumber` <a name="ResetProjectNumber" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resetProjectNumber"></a>

```go
func ResetProjectNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups">FeatureGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput">FeatureGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumberInput">ProjectNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumber">ProjectNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureGroups`<sup>Required</sup> <a name="FeatureGroups" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups"></a>

```go
func FeatureGroups() GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a>

---

##### `FeatureGroupsInput`<sup>Optional</sup> <a name="FeatureGroupsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput"></a>

```go
func FeatureGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectNumberInput`<sup>Optional</sup> <a name="ProjectNumberInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumberInput"></a>

```go
func ProjectNumberInput() *string
```

- *Type:* *string

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumber"></a>

```go
func ProjectNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">GoogleVertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron">ResetCron</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCron` <a name="ResetCron" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron"></a>

```go
func ResetCron()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput">CronInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron">Cron</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput"></a>

```go
func CronInput() *string
```

- *Type:* *string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron"></a>

```go
func Cron() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putBruteForceConfig">PutBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putTreeAhConfig">PutTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetBruteForceConfig">ResetBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetCrowdingColumn">ResetCrowdingColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetDistanceMeasureType">ResetDistanceMeasureType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetFilterColumns">ResetFilterColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetTreeAhConfig">ResetTreeAhConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBruteForceConfig` <a name="PutBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putBruteForceConfig"></a>

```go
func PutBruteForceConfig(value GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putBruteForceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a>

---

##### `PutTreeAhConfig` <a name="PutTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putTreeAhConfig"></a>

```go
func PutTreeAhConfig(value GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.putTreeAhConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a>

---

##### `ResetBruteForceConfig` <a name="ResetBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetBruteForceConfig"></a>

```go
func ResetBruteForceConfig()
```

##### `ResetCrowdingColumn` <a name="ResetCrowdingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetCrowdingColumn"></a>

```go
func ResetCrowdingColumn()
```

##### `ResetDistanceMeasureType` <a name="ResetDistanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetDistanceMeasureType"></a>

```go
func ResetDistanceMeasureType()
```

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetEmbeddingDimension"></a>

```go
func ResetEmbeddingDimension()
```

##### `ResetFilterColumns` <a name="ResetFilterColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetFilterColumns"></a>

```go
func ResetFilterColumns()
```

##### `ResetTreeAhConfig` <a name="ResetTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.resetTreeAhConfig"></a>

```go
func ResetTreeAhConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.bruteForceConfig">BruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.treeAhConfig">TreeAhConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.bruteForceConfigInput">BruteForceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.crowdingColumnInput">CrowdingColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.distanceMeasureTypeInput">DistanceMeasureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingColumnInput">EmbeddingColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.filterColumnsInput">FilterColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.treeAhConfigInput">TreeAhConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.crowdingColumn">CrowdingColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.distanceMeasureType">DistanceMeasureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingColumn">EmbeddingColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.filterColumns">FilterColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BruteForceConfig`<sup>Required</sup> <a name="BruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.bruteForceConfig"></a>

```go
func BruteForceConfig() GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfigOutputReference</a>

---

##### `TreeAhConfig`<sup>Required</sup> <a name="TreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.treeAhConfig"></a>

```go
func TreeAhConfig() GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference</a>

---

##### `BruteForceConfigInput`<sup>Optional</sup> <a name="BruteForceConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.bruteForceConfigInput"></a>

```go
func BruteForceConfigInput() GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigBruteForceConfig</a>

---

##### `CrowdingColumnInput`<sup>Optional</sup> <a name="CrowdingColumnInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.crowdingColumnInput"></a>

```go
func CrowdingColumnInput() *string
```

- *Type:* *string

---

##### `DistanceMeasureTypeInput`<sup>Optional</sup> <a name="DistanceMeasureTypeInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.distanceMeasureTypeInput"></a>

```go
func DistanceMeasureTypeInput() *string
```

- *Type:* *string

---

##### `EmbeddingColumnInput`<sup>Optional</sup> <a name="EmbeddingColumnInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingColumnInput"></a>

```go
func EmbeddingColumnInput() *string
```

- *Type:* *string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingDimensionInput"></a>

```go
func EmbeddingDimensionInput() *f64
```

- *Type:* *f64

---

##### `FilterColumnsInput`<sup>Optional</sup> <a name="FilterColumnsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.filterColumnsInput"></a>

```go
func FilterColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TreeAhConfigInput`<sup>Optional</sup> <a name="TreeAhConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.treeAhConfigInput"></a>

```go
func TreeAhConfigInput() GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a>

---

##### `CrowdingColumn`<sup>Required</sup> <a name="CrowdingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.crowdingColumn"></a>

```go
func CrowdingColumn() *string
```

- *Type:* *string

---

##### `DistanceMeasureType`<sup>Required</sup> <a name="DistanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.distanceMeasureType"></a>

```go
func DistanceMeasureType() *string
```

- *Type:* *string

---

##### `EmbeddingColumn`<sup>Required</sup> <a name="EmbeddingColumn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingColumn"></a>

```go
func EmbeddingColumn() *string
```

- *Type:* *string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.embeddingDimension"></a>

```go
func EmbeddingDimension() *f64
```

- *Type:* *f64

---

##### `FilterColumns`<sup>Required</sup> <a name="FilterColumns" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.filterColumns"></a>

```go
func FilterColumns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfig</a>

---


### GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlevertexaifeatureonlinestorefeatureview"

googlevertexaifeatureonlinestorefeatureview.NewGoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount">ResetLeafNodeEmbeddingCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeafNodeEmbeddingCount` <a name="ResetLeafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount"></a>

```go
func ResetLeafNodeEmbeddingCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput">LeafNodeEmbeddingCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">LeafNodeEmbeddingCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeafNodeEmbeddingCountInput`<sup>Optional</sup> <a name="LeafNodeEmbeddingCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput"></a>

```go
func LeafNodeEmbeddingCountInput() *string
```

- *Type:* *string

---

##### `LeafNodeEmbeddingCount`<sup>Required</sup> <a name="LeafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```go
func LeafNodeEmbeddingCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureview.GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig">GoogleVertexAiFeatureOnlineStoreFeatureviewVectorSearchConfigTreeAhConfig</a>

---



