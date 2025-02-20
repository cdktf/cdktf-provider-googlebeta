# `googleClouddeployDeliveryPipelineIamBinding` Submodule <a name="`googleClouddeployDeliveryPipelineIamBinding` Submodule" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployDeliveryPipelineIamBinding <a name="GoogleClouddeployDeliveryPipelineIamBinding" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding google_clouddeploy_delivery_pipeline_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddeploydeliverypipelineiambinding"

googleclouddeploydeliverypipelineiambinding.NewGoogleClouddeployDeliveryPipelineIamBinding(scope Construct, id *string, config GoogleClouddeployDeliveryPipelineIamBindingConfig) GoogleClouddeployDeliveryPipelineIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig">GoogleClouddeployDeliveryPipelineIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig">GoogleClouddeployDeliveryPipelineIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleClouddeployDeliveryPipelineIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition">GoogleClouddeployDeliveryPipelineIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployDeliveryPipelineIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddeploydeliverypipelineiambinding"

googleclouddeploydeliverypipelineiambinding.GoogleClouddeployDeliveryPipelineIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddeploydeliverypipelineiambinding"

googleclouddeploydeliverypipelineiambinding.GoogleClouddeployDeliveryPipelineIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddeploydeliverypipelineiambinding"

googleclouddeploydeliverypipelineiambinding.GoogleClouddeployDeliveryPipelineIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddeploydeliverypipelineiambinding"

googleclouddeploydeliverypipelineiambinding.GoogleClouddeployDeliveryPipelineIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleClouddeployDeliveryPipelineIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleClouddeployDeliveryPipelineIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleClouddeployDeliveryPipelineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployDeliveryPipelineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference">GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition">GoogleClouddeployDeliveryPipelineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.condition"></a>

```go
func Condition() GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference">GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleClouddeployDeliveryPipelineIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition">GoogleClouddeployDeliveryPipelineIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployDeliveryPipelineIamBindingCondition <a name="GoogleClouddeployDeliveryPipelineIamBindingCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddeploydeliverypipelineiambinding"

&googleclouddeploydeliverypipelineiambinding.GoogleClouddeployDeliveryPipelineIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#expression GoogleClouddeployDeliveryPipelineIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#title GoogleClouddeployDeliveryPipelineIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#description GoogleClouddeployDeliveryPipelineIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#expression GoogleClouddeployDeliveryPipelineIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#title GoogleClouddeployDeliveryPipelineIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#description GoogleClouddeployDeliveryPipelineIamBinding#description}.

---

### GoogleClouddeployDeliveryPipelineIamBindingConfig <a name="GoogleClouddeployDeliveryPipelineIamBindingConfig" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddeploydeliverypipelineiambinding"

&googleclouddeploydeliverypipelineiambinding.GoogleClouddeployDeliveryPipelineIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Name: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#members GoogleClouddeployDeliveryPipelineIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#name GoogleClouddeployDeliveryPipelineIamBinding#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#role GoogleClouddeployDeliveryPipelineIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition">GoogleClouddeployDeliveryPipelineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#id GoogleClouddeployDeliveryPipelineIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#location GoogleClouddeployDeliveryPipelineIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#project GoogleClouddeployDeliveryPipelineIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#members GoogleClouddeployDeliveryPipelineIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#name GoogleClouddeployDeliveryPipelineIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#role GoogleClouddeployDeliveryPipelineIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.condition"></a>

```go
Condition GoogleClouddeployDeliveryPipelineIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition">GoogleClouddeployDeliveryPipelineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#condition GoogleClouddeployDeliveryPipelineIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#id GoogleClouddeployDeliveryPipelineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#location GoogleClouddeployDeliveryPipelineIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_binding#project GoogleClouddeployDeliveryPipelineIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference <a name="GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddeploydeliverypipelineiambinding"

googleclouddeploydeliverypipelineiambinding.NewGoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition">GoogleClouddeployDeliveryPipelineIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddeployDeliveryPipelineIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamBinding.GoogleClouddeployDeliveryPipelineIamBindingCondition">GoogleClouddeployDeliveryPipelineIamBindingCondition</a>

---



