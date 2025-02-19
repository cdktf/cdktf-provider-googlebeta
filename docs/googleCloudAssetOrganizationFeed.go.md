# `googleCloudAssetOrganizationFeed` Submodule <a name="`googleCloudAssetOrganizationFeed` Submodule" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudAssetOrganizationFeed <a name="GoogleCloudAssetOrganizationFeed" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed google_cloud_asset_organization_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

googlecloudassetorganizationfeed.NewGoogleCloudAssetOrganizationFeed(scope Construct, id *string, config GoogleCloudAssetOrganizationFeedConfig) GoogleCloudAssetOrganizationFeed
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig">GoogleCloudAssetOrganizationFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig">GoogleCloudAssetOrganizationFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putFeedOutputConfig">PutFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetNames">ResetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetTypes">ResetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition"></a>

```go
func PutCondition(value GoogleCloudAssetOrganizationFeedCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

---

##### `PutFeedOutputConfig` <a name="PutFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putFeedOutputConfig"></a>

```go
func PutFeedOutputConfig(value GoogleCloudAssetOrganizationFeedFeedOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudAssetOrganizationFeedTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>

---

##### `ResetAssetNames` <a name="ResetAssetNames" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetNames"></a>

```go
func ResetAssetNames()
```

##### `ResetAssetTypes` <a name="ResetAssetTypes" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetTypes"></a>

```go
func ResetAssetTypes()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

googlecloudassetorganizationfeed.GoogleCloudAssetOrganizationFeed_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

googlecloudassetorganizationfeed.GoogleCloudAssetOrganizationFeed_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

googlecloudassetorganizationfeed.GoogleCloudAssetOrganizationFeed_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

googlecloudassetorganizationfeed.GoogleCloudAssetOrganizationFeed_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudAssetOrganizationFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudAssetOrganizationFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudAssetOrganizationFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference">GoogleCloudAssetOrganizationFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference">GoogleCloudAssetOrganizationFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNamesInput">AssetNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypesInput">AssetTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProjectInput">BillingProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedIdInput">FeedIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfigInput">FeedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNames">AssetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProject">BillingProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedId">FeedId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.condition"></a>

```go
func Condition() GoogleCloudAssetOrganizationFeedConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference">GoogleCloudAssetOrganizationFeedConditionOutputReference</a>

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfig"></a>

```go
func FeedOutputConfig() GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeouts"></a>

```go
func Timeouts() GoogleCloudAssetOrganizationFeedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference">GoogleCloudAssetOrganizationFeedTimeoutsOutputReference</a>

---

##### `AssetNamesInput`<sup>Optional</sup> <a name="AssetNamesInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNamesInput"></a>

```go
func AssetNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssetTypesInput`<sup>Optional</sup> <a name="AssetTypesInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypesInput"></a>

```go
func AssetTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BillingProjectInput`<sup>Optional</sup> <a name="BillingProjectInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProjectInput"></a>

```go
func BillingProjectInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.conditionInput"></a>

```go
func ConditionInput() GoogleCloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `FeedIdInput`<sup>Optional</sup> <a name="FeedIdInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedIdInput"></a>

```go
func FeedIdInput() *string
```

- *Type:* *string

---

##### `FeedOutputConfigInput`<sup>Optional</sup> <a name="FeedOutputConfigInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfigInput"></a>

```go
func FeedOutputConfigInput() GoogleCloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetNames`<sup>Required</sup> <a name="AssetNames" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNames"></a>

```go
func AssetNames() *[]*string
```

- *Type:* *[]*string

---

##### `AssetTypes`<sup>Required</sup> <a name="AssetTypes" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypes"></a>

```go
func AssetTypes() *[]*string
```

- *Type:* *[]*string

---

##### `BillingProject`<sup>Required</sup> <a name="BillingProject" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProject"></a>

```go
func BillingProject() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedId"></a>

```go
func FeedId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudAssetOrganizationFeedCondition <a name="GoogleCloudAssetOrganizationFeedCondition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

&googlecloudassetorganizationfeed.GoogleCloudAssetOrganizationFeedCondition {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#expression GoogleCloudAssetOrganizationFeed#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#description GoogleCloudAssetOrganizationFeed#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#location GoogleCloudAssetOrganizationFeed#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#title GoogleCloudAssetOrganizationFeed#title}

---

### GoogleCloudAssetOrganizationFeedConfig <a name="GoogleCloudAssetOrganizationFeedConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

&googlecloudassetorganizationfeed.GoogleCloudAssetOrganizationFeedConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingProject: *string,
	FeedId: *string,
	FeedOutputConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig,
	OrgId: *string,
	AssetNames: *[]*string,
	AssetTypes: *[]*string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition,
	ContentType: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.billingProject">BillingProject</a></code> | <code>*string</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedId">FeedId</a></code> | <code>*string</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The organization this feed should be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetNames">AssetNames</a></code> | <code>*[]*string</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#id GoogleCloudAssetOrganizationFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingProject`<sup>Required</sup> <a name="BillingProject" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.billingProject"></a>

```go
BillingProject *string
```

- *Type:* *string

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#billing_project GoogleCloudAssetOrganizationFeed#billing_project}

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedId"></a>

```go
FeedId *string
```

- *Type:* *string

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#feed_id GoogleCloudAssetOrganizationFeed#feed_id}

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedOutputConfig"></a>

```go
FeedOutputConfig GoogleCloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#feed_output_config GoogleCloudAssetOrganizationFeed#feed_output_config}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The organization this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#org_id GoogleCloudAssetOrganizationFeed#org_id}

---

##### `AssetNames`<sup>Optional</sup> <a name="AssetNames" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetNames"></a>

```go
AssetNames *[]*string
```

- *Type:* *[]*string

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#asset_names GoogleCloudAssetOrganizationFeed#asset_names}

---

##### `AssetTypes`<sup>Optional</sup> <a name="AssetTypes" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetTypes"></a>

```go
AssetTypes *[]*string
```

- *Type:* *[]*string

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#asset_types GoogleCloudAssetOrganizationFeed#asset_types}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.condition"></a>

```go
Condition GoogleCloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#condition GoogleCloudAssetOrganizationFeed#condition}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#content_type GoogleCloudAssetOrganizationFeed#content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#id GoogleCloudAssetOrganizationFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudAssetOrganizationFeedTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#timeouts GoogleCloudAssetOrganizationFeed#timeouts}

---

### GoogleCloudAssetOrganizationFeedFeedOutputConfig <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

&googlecloudassetorganizationfeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig {
	PubsubDestination: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination"></a>

```go
PubsubDestination GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#pubsub_destination GoogleCloudAssetOrganizationFeed#pubsub_destination}

---

### GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

&googlecloudassetorganizationfeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination {
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic">Topic</a></code> | <code>*string</code> | Destination on Cloud Pubsub topic. |

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#topic GoogleCloudAssetOrganizationFeed#topic}

---

### GoogleCloudAssetOrganizationFeedTimeouts <a name="GoogleCloudAssetOrganizationFeedTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

&googlecloudassetorganizationfeed.GoogleCloudAssetOrganizationFeedTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#create GoogleCloudAssetOrganizationFeed#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#delete GoogleCloudAssetOrganizationFeed#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#update GoogleCloudAssetOrganizationFeed#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#create GoogleCloudAssetOrganizationFeed#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#delete GoogleCloudAssetOrganizationFeed#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_asset_organization_feed#update GoogleCloudAssetOrganizationFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudAssetOrganizationFeedConditionOutputReference <a name="GoogleCloudAssetOrganizationFeedConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

googlecloudassetorganizationfeed.NewGoogleCloudAssetOrganizationFeedConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudAssetOrganizationFeedConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

---


### GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

googlecloudassetorganizationfeed.NewGoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```go
func PutPubsubDestination(value GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```go
func PubsubDestination() GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```go
func PubsubDestinationInput() GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

---


### GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

googlecloudassetorganizationfeed.NewGoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


### GoogleCloudAssetOrganizationFeedTimeoutsOutputReference <a name="GoogleCloudAssetOrganizationFeedTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudassetorganizationfeed"

googlecloudassetorganizationfeed.NewGoogleCloudAssetOrganizationFeedTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudAssetOrganizationFeedTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



