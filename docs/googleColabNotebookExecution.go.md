# `googleColabNotebookExecution` Submodule <a name="`googleColabNotebookExecution` Submodule" id="@cdktf/provider-google-beta.googleColabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabNotebookExecution <a name="GoogleColabNotebookExecution" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecution(scope Construct, id *string, config GoogleColabNotebookExecutionConfig) GoogleColabNotebookExecution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig">GoogleColabNotebookExecutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig">GoogleColabNotebookExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource">PutDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource">PutDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource">PutGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDataformRepositorySource">ResetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDirectNotebookSource">ResetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionUser">ResetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetGcsNotebookSource">ResetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookExecutionJobId">ResetNotebookExecutionJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">ResetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataformRepositorySource` <a name="PutDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource"></a>

```go
func PutDataformRepositorySource(value GoogleColabNotebookExecutionDataformRepositorySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---

##### `PutDirectNotebookSource` <a name="PutDirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource"></a>

```go
func PutDirectNotebookSource(value GoogleColabNotebookExecutionDirectNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---

##### `PutGcsNotebookSource` <a name="PutGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource"></a>

```go
func PutGcsNotebookSource(value GoogleColabNotebookExecutionGcsNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts"></a>

```go
func PutTimeouts(value GoogleColabNotebookExecutionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

---

##### `ResetDataformRepositorySource` <a name="ResetDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDataformRepositorySource"></a>

```go
func ResetDataformRepositorySource()
```

##### `ResetDirectNotebookSource` <a name="ResetDirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDirectNotebookSource"></a>

```go
func ResetDirectNotebookSource()
```

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionTimeout"></a>

```go
func ResetExecutionTimeout()
```

##### `ResetExecutionUser` <a name="ResetExecutionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionUser"></a>

```go
func ResetExecutionUser()
```

##### `ResetGcsNotebookSource` <a name="ResetGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetGcsNotebookSource"></a>

```go
func ResetGcsNotebookSource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetId"></a>

```go
func ResetId()
```

##### `ResetNotebookExecutionJobId` <a name="ResetNotebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookExecutionJobId"></a>

```go
func ResetNotebookExecutionJobId()
```

##### `ResetNotebookRuntimeTemplateResourceName` <a name="ResetNotebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```go
func ResetNotebookRuntimeTemplateResourceName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleColabNotebookExecution resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

googlecolabnotebookexecution.GoogleColabNotebookExecution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

googlecolabnotebookexecution.GoogleColabNotebookExecution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

googlecolabnotebookexecution.GoogleColabNotebookExecution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

googlecolabnotebookexecution.GoogleColabNotebookExecution_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleColabNotebookExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleColabNotebookExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference">GoogleColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference">GoogleColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference">GoogleColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference">GoogleColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySourceInput">DataformRepositorySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSourceInput">DirectNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUserInput">ExecutionUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSourceInput">GcsNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUriInput">GcsOutputUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobIdInput">NotebookExecutionJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">NotebookRuntimeTemplateResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataformRepositorySource`<sup>Required</sup> <a name="DataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySource"></a>

```go
func DataformRepositorySource() GoogleColabNotebookExecutionDataformRepositorySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference">GoogleColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `DirectNotebookSource`<sup>Required</sup> <a name="DirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSource"></a>

```go
func DirectNotebookSource() GoogleColabNotebookExecutionDirectNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference">GoogleColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `GcsNotebookSource`<sup>Required</sup> <a name="GcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSource"></a>

```go
func GcsNotebookSource() GoogleColabNotebookExecutionGcsNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference">GoogleColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeouts"></a>

```go
func Timeouts() GoogleColabNotebookExecutionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference">GoogleColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `DataformRepositorySourceInput`<sup>Optional</sup> <a name="DataformRepositorySourceInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```go
func DataformRepositorySourceInput() GoogleColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---

##### `DirectNotebookSourceInput`<sup>Optional</sup> <a name="DirectNotebookSourceInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSourceInput"></a>

```go
func DirectNotebookSourceInput() GoogleColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeoutInput"></a>

```go
func ExecutionTimeoutInput() *string
```

- *Type:* *string

---

##### `ExecutionUserInput`<sup>Optional</sup> <a name="ExecutionUserInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUserInput"></a>

```go
func ExecutionUserInput() *string
```

- *Type:* *string

---

##### `GcsNotebookSourceInput`<sup>Optional</sup> <a name="GcsNotebookSourceInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```go
func GcsNotebookSourceInput() GoogleColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---

##### `GcsOutputUriInput`<sup>Optional</sup> <a name="GcsOutputUriInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUriInput"></a>

```go
func GcsOutputUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobIdInput`<sup>Optional</sup> <a name="NotebookExecutionJobIdInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```go
func NotebookExecutionJobIdInput() *string
```

- *Type:* *string

---

##### `NotebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceNameInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```go
func NotebookRuntimeTemplateResourceNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeout"></a>

```go
func ExecutionTimeout() *string
```

- *Type:* *string

---

##### `ExecutionUser`<sup>Required</sup> <a name="ExecutionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUser"></a>

```go
func ExecutionUser() *string
```

- *Type:* *string

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUri"></a>

```go
func GcsOutputUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobId`<sup>Required</sup> <a name="NotebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobId"></a>

```go
func NotebookExecutionJobId() *string
```

- *Type:* *string

---

##### `NotebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```go
func NotebookRuntimeTemplateResourceName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabNotebookExecutionConfig <a name="GoogleColabNotebookExecutionConfig" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	GcsOutputUri: *string,
	Location: *string,
	DataformRepositorySource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource,
	DirectNotebookSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource,
	ExecutionTimeout: *string,
	ExecutionUser: *string,
	GcsNotebookSource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource,
	Id: *string,
	NotebookExecutionJobId: *string,
	NotebookRuntimeTemplateResourceName: *string,
	Project: *string,
	ServiceAccount: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account to run the execution as. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#display_name GoogleColabNotebookExecution#display_name}

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```go
GcsOutputUri *string
```

- *Type:* *string

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#gcs_output_uri GoogleColabNotebookExecution#gcs_output_uri}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#location GoogleColabNotebookExecution#location}

---

##### `DataformRepositorySource`<sup>Optional</sup> <a name="DataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```go
DataformRepositorySource GoogleColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#dataform_repository_source GoogleColabNotebookExecution#dataform_repository_source}

---

##### `DirectNotebookSource`<sup>Optional</sup> <a name="DirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.directNotebookSource"></a>

```go
DirectNotebookSource GoogleColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#direct_notebook_source GoogleColabNotebookExecution#direct_notebook_source}

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionTimeout"></a>

```go
ExecutionTimeout *string
```

- *Type:* *string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#execution_timeout GoogleColabNotebookExecution#execution_timeout}

---

##### `ExecutionUser`<sup>Optional</sup> <a name="ExecutionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionUser"></a>

```go
ExecutionUser *string
```

- *Type:* *string

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#execution_user GoogleColabNotebookExecution#execution_user}

---

##### `GcsNotebookSource`<sup>Optional</sup> <a name="GcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```go
GcsNotebookSource GoogleColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#gcs_notebook_source GoogleColabNotebookExecution#gcs_notebook_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotebookExecutionJobId`<sup>Optional</sup> <a name="NotebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```go
NotebookExecutionJobId *string
```

- *Type:* *string

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#notebook_execution_job_id GoogleColabNotebookExecution#notebook_execution_job_id}

---

##### `NotebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```go
NotebookRuntimeTemplateResourceName *string
```

- *Type:* *string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#notebook_runtime_template_resource_name GoogleColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#service_account GoogleColabNotebookExecution#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.timeouts"></a>

```go
Timeouts GoogleColabNotebookExecutionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#timeouts GoogleColabNotebookExecution#timeouts}

---

### GoogleColabNotebookExecutionDataformRepositorySource <a name="GoogleColabNotebookExecutionDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionDataformRepositorySource {
	DataformRepositoryResourceName: *string,
	CommitSha: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.commitSha">CommitSha</a></code> | <code>*string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```go
DataformRepositoryResourceName *string
```

- *Type:* *string

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#dataform_repository_resource_name GoogleColabNotebookExecution#dataform_repository_resource_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#commit_sha GoogleColabNotebookExecution#commit_sha}

---

### GoogleColabNotebookExecutionDirectNotebookSource <a name="GoogleColabNotebookExecutionDirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionDirectNotebookSource {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.property.content">Content</a></code> | <code>*string</code> | The base64-encoded contents of the input notebook file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.property.content"></a>

```go
Content *string
```

- *Type:* *string

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#content GoogleColabNotebookExecution#content}

---

### GoogleColabNotebookExecutionGcsNotebookSource <a name="GoogleColabNotebookExecutionGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionGcsNotebookSource {
	Uri: *string,
	Generation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.uri">Uri</a></code> | <code>*string</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.generation">Generation</a></code> | <code>*string</code> | The version of the Cloud Storage object to read. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#uri GoogleColabNotebookExecution#uri}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```go
Generation *string
```

- *Type:* *string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#generation GoogleColabNotebookExecution#generation}

---

### GoogleColabNotebookExecutionTimeouts <a name="GoogleColabNotebookExecutionTimeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#create GoogleColabNotebookExecution#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#delete GoogleColabNotebookExecution#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#create GoogleColabNotebookExecution#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_notebook_execution#delete GoogleColabNotebookExecution#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabNotebookExecutionDataformRepositorySourceOutputReference <a name="GoogleColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionDataformRepositorySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionDataformRepositorySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">DataformRepositoryResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="DataformRepositoryResourceNameInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```go
func DataformRepositoryResourceNameInput() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```go
func DataformRepositoryResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---


### GoogleColabNotebookExecutionDirectNotebookSourceOutputReference <a name="GoogleColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionDirectNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionDirectNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---


### GoogleColabNotebookExecutionGcsNotebookSourceOutputReference <a name="GoogleColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionGcsNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionGcsNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```go
func GenerationInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---


### GoogleColabNotebookExecutionTimeoutsOutputReference <a name="GoogleColabNotebookExecutionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



