# `googleTranscoderJobTemplate` Submodule <a name="`googleTranscoderJobTemplate` Submodule" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTranscoderJobTemplate <a name="GoogleTranscoderJobTemplate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template google_transcoder_job_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplate(scope Construct, id *string, config GoogleTranscoderJobTemplateConfig) GoogleTranscoderJobTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig">GoogleTranscoderJobTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig">GoogleTranscoderJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putConfig"></a>

```go
func PutConfig(value GoogleTranscoderJobTemplateConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putTimeouts"></a>

```go
func PutTimeouts(value GoogleTranscoderJobTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts">GoogleTranscoderJobTemplateTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleTranscoderJobTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.GoogleTranscoderJobTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.GoogleTranscoderJobTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.GoogleTranscoderJobTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.GoogleTranscoderJobTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleTranscoderJobTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleTranscoderJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleTranscoderJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTranscoderJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference">GoogleTranscoderJobTemplateConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference">GoogleTranscoderJobTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.jobTemplateIdInput">JobTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.jobTemplateId">JobTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.config"></a>

```go
func Config() GoogleTranscoderJobTemplateConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference">GoogleTranscoderJobTemplateConfigAOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.timeouts"></a>

```go
func Timeouts() GoogleTranscoderJobTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference">GoogleTranscoderJobTemplateTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.configInput"></a>

```go
func ConfigInput() GoogleTranscoderJobTemplateConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobTemplateIdInput`<sup>Optional</sup> <a name="JobTemplateIdInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.jobTemplateIdInput"></a>

```go
func JobTemplateIdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.jobTemplateId"></a>

```go
func JobTemplateId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTranscoderJobTemplateConfig <a name="GoogleTranscoderJobTemplateConfig" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	JobTemplateId: *string,
	Location: *string,
	Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.jobTemplateId">JobTemplateId</a></code> | <code>*string</code> | ID to use for the Transcoding job template. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.location">Location</a></code> | <code>*string</code> | The location of the transcoding job template resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#id GoogleTranscoderJobTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this job template. You can use these to organize and group your job templates. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#project GoogleTranscoderJobTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts">GoogleTranscoderJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.jobTemplateId"></a>

```go
JobTemplateId *string
```

- *Type:* *string

ID to use for the Transcoding job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#job_template_id GoogleTranscoderJobTemplate#job_template_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the transcoding job template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#location GoogleTranscoderJobTemplate#location}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.config"></a>

```go
Config GoogleTranscoderJobTemplateConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#config GoogleTranscoderJobTemplate#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#id GoogleTranscoderJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this job template. You can use these to organize and group your job templates.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#labels GoogleTranscoderJobTemplate#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#project GoogleTranscoderJobTemplate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfig.property.timeouts"></a>

```go
Timeouts GoogleTranscoderJobTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts">GoogleTranscoderJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#timeouts GoogleTranscoderJobTemplate#timeouts}

---

### GoogleTranscoderJobTemplateConfigA <a name="GoogleTranscoderJobTemplateConfigA" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigA {
	AdBreaks: interface{},
	EditList: interface{},
	ElementaryStreams: interface{},
	Encryptions: interface{},
	Inputs: interface{},
	Manifests: interface{},
	MuxStreams: interface{},
	Output: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput,
	Overlays: interface{},
	PubsubDestination: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.adBreaks">AdBreaks</a></code> | <code>interface{}</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.editList">EditList</a></code> | <code>interface{}</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.elementaryStreams">ElementaryStreams</a></code> | <code>interface{}</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.encryptions">Encryptions</a></code> | <code>interface{}</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.inputs">Inputs</a></code> | <code>interface{}</code> | inputs block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.manifests">Manifests</a></code> | <code>interface{}</code> | manifests block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.muxStreams">MuxStreams</a></code> | <code>interface{}</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.overlays">Overlays</a></code> | <code>interface{}</code> | overlays block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `AdBreaks`<sup>Optional</sup> <a name="AdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.adBreaks"></a>

```go
AdBreaks interface{}
```

- *Type:* interface{}

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#ad_breaks GoogleTranscoderJobTemplate#ad_breaks}

---

##### `EditList`<sup>Optional</sup> <a name="EditList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.editList"></a>

```go
EditList interface{}
```

- *Type:* interface{}

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#edit_list GoogleTranscoderJobTemplate#edit_list}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.elementaryStreams"></a>

```go
ElementaryStreams interface{}
```

- *Type:* interface{}

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#elementary_streams GoogleTranscoderJobTemplate#elementary_streams}

---

##### `Encryptions`<sup>Optional</sup> <a name="Encryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.encryptions"></a>

```go
Encryptions interface{}
```

- *Type:* interface{}

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#encryptions GoogleTranscoderJobTemplate#encryptions}

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.inputs"></a>

```go
Inputs interface{}
```

- *Type:* interface{}

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#inputs GoogleTranscoderJobTemplate#inputs}

---

##### `Manifests`<sup>Optional</sup> <a name="Manifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.manifests"></a>

```go
Manifests interface{}
```

- *Type:* interface{}

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#manifests GoogleTranscoderJobTemplate#manifests}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.muxStreams"></a>

```go
MuxStreams interface{}
```

- *Type:* interface{}

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#mux_streams GoogleTranscoderJobTemplate#mux_streams}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.output"></a>

```go
Output GoogleTranscoderJobTemplateConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#output GoogleTranscoderJobTemplate#output}

---

##### `Overlays`<sup>Optional</sup> <a name="Overlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.overlays"></a>

```go
Overlays interface{}
```

- *Type:* interface{}

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#overlays GoogleTranscoderJobTemplate#overlays}

---

##### `PubsubDestination`<sup>Optional</sup> <a name="PubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA.property.pubsubDestination"></a>

```go
PubsubDestination GoogleTranscoderJobTemplateConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#pubsub_destination GoogleTranscoderJobTemplate#pubsub_destination}

---

### GoogleTranscoderJobTemplateConfigAdBreaks <a name="GoogleTranscoderJobTemplateConfigAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigAdBreaks {
	StartTimeOffset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaks.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaks.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#start_time_offset GoogleTranscoderJobTemplate#start_time_offset}

---

### GoogleTranscoderJobTemplateConfigEditListStruct <a name="GoogleTranscoderJobTemplateConfigEditListStruct" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEditListStruct {
	Inputs: *[]*string,
	Key: *string,
	StartTimeOffset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.inputs">Inputs</a></code> | <code>*[]*string</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.key">Key</a></code> | <code>*string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'. |

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#inputs GoogleTranscoderJobTemplate#inputs}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#key GoogleTranscoderJobTemplate#key}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStruct.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#start_time_offset GoogleTranscoderJobTemplate#start_time_offset}

---

### GoogleTranscoderJobTemplateConfigElementaryStreams <a name="GoogleTranscoderJobTemplateConfigElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigElementaryStreams {
	AudioStream: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream,
	Key: *string,
	VideoStream: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.key">Key</a></code> | <code>*string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `AudioStream`<sup>Optional</sup> <a name="AudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.audioStream"></a>

```go
AudioStream GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#audio_stream GoogleTranscoderJobTemplate#audio_stream}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#key GoogleTranscoderJobTemplate#key}

---

##### `VideoStream`<sup>Optional</sup> <a name="VideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreams.property.videoStream"></a>

```go
VideoStream GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#video_stream GoogleTranscoderJobTemplate#video_stream}

---

### GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream {
	BitrateBps: *f64,
	ChannelCount: *f64,
	ChannelLayout: *[]*string,
	Codec: *string,
	SampleRateHertz: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount">ChannelCount</a></code> | <code>*f64</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout">ChannelLayout</a></code> | <code>*[]*string</code> | A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec">Codec</a></code> | <code>*string</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz">SampleRateHertz</a></code> | <code>*f64</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```go
BitrateBps *f64
```

- *Type:* *f64

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#bitrate_bps GoogleTranscoderJobTemplate#bitrate_bps}

---

##### `ChannelCount`<sup>Optional</sup> <a name="ChannelCount" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount"></a>

```go
ChannelCount *f64
```

- *Type:* *f64

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#channel_count GoogleTranscoderJobTemplate#channel_count}

---

##### `ChannelLayout`<sup>Optional</sup> <a name="ChannelLayout" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```go
ChannelLayout *[]*string
```

- *Type:* *[]*string

A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#channel_layout GoogleTranscoderJobTemplate#channel_layout}

---

##### `Codec`<sup>Optional</sup> <a name="Codec" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec"></a>

```go
Codec *string
```

- *Type:* *string

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#codec GoogleTranscoderJobTemplate#codec}

---

##### `SampleRateHertz`<sup>Optional</sup> <a name="SampleRateHertz" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```go
SampleRateHertz *f64
```

- *Type:* *f64

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#sample_rate_hertz GoogleTranscoderJobTemplate#sample_rate_hertz}

---

### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream {
	H264: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `H264`<sup>Optional</sup> <a name="H264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264"></a>

```go
H264 GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#h264 GoogleTranscoderJobTemplate#h264}

---

### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 {
	BitrateBps: *f64,
	FrameRate: *f64,
	CrfLevel: *f64,
	EntropyCoder: *string,
	GopDuration: *string,
	HeightPixels: *f64,
	Hlg: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg,
	PixelFormat: *string,
	Preset: *string,
	Profile: *string,
	RateControlMode: *string,
	Sdr: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr,
	VbvFullnessBits: *f64,
	VbvSizeBits: *f64,
	WidthPixels: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate">FrameRate</a></code> | <code>*f64</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel">CrfLevel</a></code> | <code>*f64</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder">EntropyCoder</a></code> | <code>*string</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration">GopDuration</a></code> | <code>*string</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels">HeightPixels</a></code> | <code>*f64</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat">PixelFormat</a></code> | <code>*string</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset">Preset</a></code> | <code>*string</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile">Profile</a></code> | <code>*string</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode">RateControlMode</a></code> | <code>*string</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>*f64</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">VbvSizeBits</a></code> | <code>*f64</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels">WidthPixels</a></code> | <code>*f64</code> | The width of the video in pixels. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```go
BitrateBps *f64
```

- *Type:* *f64

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#bitrate_bps GoogleTranscoderJobTemplate#bitrate_bps}

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```go
FrameRate *f64
```

- *Type:* *f64

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#frame_rate GoogleTranscoderJobTemplate#frame_rate}

---

##### `CrfLevel`<sup>Optional</sup> <a name="CrfLevel" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```go
CrfLevel *f64
```

- *Type:* *f64

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#crf_level GoogleTranscoderJobTemplate#crf_level}

---

##### `EntropyCoder`<sup>Optional</sup> <a name="EntropyCoder" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```go
EntropyCoder *string
```

- *Type:* *string

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#entropy_coder GoogleTranscoderJobTemplate#entropy_coder}

---

##### `GopDuration`<sup>Optional</sup> <a name="GopDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```go
GopDuration *string
```

- *Type:* *string

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#gop_duration GoogleTranscoderJobTemplate#gop_duration}

---

##### `HeightPixels`<sup>Optional</sup> <a name="HeightPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```go
HeightPixels *f64
```

- *Type:* *f64

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#height_pixels GoogleTranscoderJobTemplate#height_pixels}

---

##### `Hlg`<sup>Optional</sup> <a name="Hlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```go
Hlg GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#hlg GoogleTranscoderJobTemplate#hlg}

---

##### `PixelFormat`<sup>Optional</sup> <a name="PixelFormat" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```go
PixelFormat *string
```

- *Type:* *string

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#pixel_format GoogleTranscoderJobTemplate#pixel_format}

---

##### `Preset`<sup>Optional</sup> <a name="Preset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```go
Preset *string
```

- *Type:* *string

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#preset GoogleTranscoderJobTemplate#preset}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#profile GoogleTranscoderJobTemplate#profile}

---

##### `RateControlMode`<sup>Optional</sup> <a name="RateControlMode" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```go
RateControlMode *string
```

- *Type:* *string

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#rate_control_mode GoogleTranscoderJobTemplate#rate_control_mode}

---

##### `Sdr`<sup>Optional</sup> <a name="Sdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```go
Sdr GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#sdr GoogleTranscoderJobTemplate#sdr}

---

##### `VbvFullnessBits`<sup>Optional</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```go
VbvFullnessBits *f64
```

- *Type:* *f64

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#vbv_fullness_bits GoogleTranscoderJobTemplate#vbv_fullness_bits}

---

##### `VbvSizeBits`<sup>Optional</sup> <a name="VbvSizeBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```go
VbvSizeBits *f64
```

- *Type:* *f64

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#vbv_size_bits GoogleTranscoderJobTemplate#vbv_size_bits}

---

##### `WidthPixels`<sup>Optional</sup> <a name="WidthPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```go
WidthPixels *f64
```

- *Type:* *f64

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#width_pixels GoogleTranscoderJobTemplate#width_pixels}

---

### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg {

}
```


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr {

}
```


### GoogleTranscoderJobTemplateConfigEncryptions <a name="GoogleTranscoderJobTemplateConfigEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptions {
	Id: *string,
	Aes128: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128,
	DrmSystems: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems,
	MpegCenc: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc,
	SampleAes: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes,
	SecretManagerKeySource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.id">Id</a></code> | <code>*string</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#id GoogleTranscoderJobTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Aes128`<sup>Optional</sup> <a name="Aes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.aes128"></a>

```go
Aes128 GoogleTranscoderJobTemplateConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#aes128 GoogleTranscoderJobTemplate#aes128}

---

##### `DrmSystems`<sup>Optional</sup> <a name="DrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.drmSystems"></a>

```go
DrmSystems GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#drm_systems GoogleTranscoderJobTemplate#drm_systems}

---

##### `MpegCenc`<sup>Optional</sup> <a name="MpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.mpegCenc"></a>

```go
MpegCenc GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#mpeg_cenc GoogleTranscoderJobTemplate#mpeg_cenc}

---

##### `SampleAes`<sup>Optional</sup> <a name="SampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.sampleAes"></a>

```go
SampleAes GoogleTranscoderJobTemplateConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#sample_aes GoogleTranscoderJobTemplate#sample_aes}

---

##### `SecretManagerKeySource`<sup>Optional</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource"></a>

```go
SecretManagerKeySource GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#secret_manager_key_source GoogleTranscoderJobTemplate#secret_manager_key_source}

---

### GoogleTranscoderJobTemplateConfigEncryptionsAes128 <a name="GoogleTranscoderJobTemplateConfigEncryptionsAes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128 {

}
```


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems {
	Clearkey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey,
	Fairplay: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay,
	Playready: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready,
	Widevine: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `Clearkey`<sup>Optional</sup> <a name="Clearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey"></a>

```go
Clearkey GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#clearkey GoogleTranscoderJobTemplate#clearkey}

---

##### `Fairplay`<sup>Optional</sup> <a name="Fairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay"></a>

```go
Fairplay GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#fairplay GoogleTranscoderJobTemplate#fairplay}

---

##### `Playready`<sup>Optional</sup> <a name="Playready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready"></a>

```go
Playready GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#playready GoogleTranscoderJobTemplate#playready}

---

##### `Widevine`<sup>Optional</sup> <a name="Widevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine"></a>

```go
Widevine GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#widevine GoogleTranscoderJobTemplate#widevine}

---

### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey {

}
```


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay {

}
```


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready {

}
```


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine {

}
```


### GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc <a name="GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc {
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme">Scheme</a></code> | <code>*string</code> | Specify the encryption scheme. |

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#scheme GoogleTranscoderJobTemplate#scheme}

---

### GoogleTranscoderJobTemplateConfigEncryptionsSampleAes <a name="GoogleTranscoderJobTemplateConfigEncryptionsSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes {

}
```


### GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource <a name="GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource {
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#secret_version GoogleTranscoderJobTemplate#secret_version}

---

### GoogleTranscoderJobTemplateConfigInputs <a name="GoogleTranscoderJobTemplateConfigInputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigInputs {
	Key: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.property.key">Key</a></code> | <code>*string</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.property.uri">Uri</a></code> | <code>*string</code> | URI of the media. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#key GoogleTranscoderJobTemplate#key}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputs.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#uri GoogleTranscoderJobTemplate#uri}

---

### GoogleTranscoderJobTemplateConfigManifests <a name="GoogleTranscoderJobTemplateConfigManifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigManifests {
	FileName: *string,
	MuxStreams: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.fileName">FileName</a></code> | <code>*string</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.muxStreams">MuxStreams</a></code> | <code>*[]*string</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.type">Type</a></code> | <code>*string</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.fileName"></a>

```go
FileName *string
```

- *Type:* *string

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#file_name GoogleTranscoderJobTemplate#file_name}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.muxStreams"></a>

```go
MuxStreams *[]*string
```

- *Type:* *[]*string

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#mux_streams GoogleTranscoderJobTemplate#mux_streams}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifests.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#type GoogleTranscoderJobTemplate#type}

---

### GoogleTranscoderJobTemplateConfigMuxStreams <a name="GoogleTranscoderJobTemplateConfigMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigMuxStreams {
	Container: *string,
	ElementaryStreams: *[]*string,
	EncryptionId: *string,
	FileName: *string,
	Key: *string,
	SegmentSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.container">Container</a></code> | <code>*string</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.elementaryStreams">ElementaryStreams</a></code> | <code>*[]*string</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.encryptionId">EncryptionId</a></code> | <code>*string</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.fileName">FileName</a></code> | <code>*string</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.key">Key</a></code> | <code>*string</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.container"></a>

```go
Container *string
```

- *Type:* *string

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#container GoogleTranscoderJobTemplate#container}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.elementaryStreams"></a>

```go
ElementaryStreams *[]*string
```

- *Type:* *[]*string

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#elementary_streams GoogleTranscoderJobTemplate#elementary_streams}

---

##### `EncryptionId`<sup>Optional</sup> <a name="EncryptionId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.encryptionId"></a>

```go
EncryptionId *string
```

- *Type:* *string

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#encryption_id GoogleTranscoderJobTemplate#encryption_id}

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.fileName"></a>

```go
FileName *string
```

- *Type:* *string

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#file_name GoogleTranscoderJobTemplate#file_name}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#key GoogleTranscoderJobTemplate#key}

---

##### `SegmentSettings`<sup>Optional</sup> <a name="SegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreams.property.segmentSettings"></a>

```go
SegmentSettings GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#segment_settings GoogleTranscoderJobTemplate#segment_settings}

---

### GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings <a name="GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings {
	SegmentDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration">SegmentDuration</a></code> | <code>*string</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `SegmentDuration`<sup>Optional</sup> <a name="SegmentDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```go
SegmentDuration *string
```

- *Type:* *string

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#segment_duration GoogleTranscoderJobTemplate#segment_duration}

---

### GoogleTranscoderJobTemplateConfigOutput <a name="GoogleTranscoderJobTemplateConfigOutput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigOutput {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput.property.uri">Uri</a></code> | <code>*string</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#uri GoogleTranscoderJobTemplate#uri}

---

### GoogleTranscoderJobTemplateConfigOverlays <a name="GoogleTranscoderJobTemplateConfigOverlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigOverlays {
	Animations: interface{},
	Image: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.property.animations">Animations</a></code> | <code>interface{}</code> | animations block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a></code> | image block. |

---

##### `Animations`<sup>Optional</sup> <a name="Animations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.property.animations"></a>

```go
Animations interface{}
```

- *Type:* interface{}

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#animations GoogleTranscoderJobTemplate#animations}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlays.property.image"></a>

```go
Image GoogleTranscoderJobTemplateConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#image GoogleTranscoderJobTemplate#image}

---

### GoogleTranscoderJobTemplateConfigOverlaysAnimations <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimations {
	AnimationFade: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimations.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `AnimationFade`<sup>Optional</sup> <a name="AnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimations.property.animationFade"></a>

```go
AnimationFade GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#animation_fade GoogleTranscoderJobTemplate#animation_fade}

---

### GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade {
	FadeType: *string,
	EndTimeOffset: *string,
	StartTimeOffset: *string,
	Xy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType">FadeType</a></code> | <code>*string</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```go
FadeType *string
```

- *Type:* *string

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#fade_type GoogleTranscoderJobTemplate#fade_type}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```go
EndTimeOffset *string
```

- *Type:* *string

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#end_time_offset GoogleTranscoderJobTemplate#end_time_offset}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#start_time_offset GoogleTranscoderJobTemplate#start_time_offset}

---

##### `Xy`<sup>Optional</sup> <a name="Xy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```go
Xy GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#xy GoogleTranscoderJobTemplate#xy}

---

### GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy {
	X: *f64,
	Y: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x">X</a></code> | <code>*f64</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y">Y</a></code> | <code>*f64</code> | Normalized y coordinate. |

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```go
X *f64
```

- *Type:* *f64

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#x GoogleTranscoderJobTemplate#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```go
Y *f64
```

- *Type:* *f64

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#y GoogleTranscoderJobTemplate#y}

---

### GoogleTranscoderJobTemplateConfigOverlaysImage <a name="GoogleTranscoderJobTemplateConfigOverlaysImage" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigOverlaysImage {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage.property.uri">Uri</a></code> | <code>*string</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#uri GoogleTranscoderJobTemplate#uri}

---

### GoogleTranscoderJobTemplateConfigPubsubDestination <a name="GoogleTranscoderJobTemplateConfigPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateConfigPubsubDestination {
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination.property.topic">Topic</a></code> | <code>*string</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#topic GoogleTranscoderJobTemplate#topic}

---

### GoogleTranscoderJobTemplateTimeouts <a name="GoogleTranscoderJobTemplateTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

&googletranscoderjobtemplate.GoogleTranscoderJobTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#create GoogleTranscoderJobTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#delete GoogleTranscoderJobTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#update GoogleTranscoderJobTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#create GoogleTranscoderJobTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#delete GoogleTranscoderJobTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_transcoder_job_template#update GoogleTranscoderJobTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTranscoderJobTemplateConfigAdBreaksList <a name="GoogleTranscoderJobTemplateConfigAdBreaksList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigAdBreaksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTranscoderJobTemplateConfigAdBreaksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.get"></a>

```go
func Get(index *f64) GoogleTranscoderJobTemplateConfigAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigAdBreaksOutputReference <a name="GoogleTranscoderJobTemplateConfigAdBreaksOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigAdBreaksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTranscoderJobTemplateConfigAdBreaksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigAOutputReference <a name="GoogleTranscoderJobTemplateConfigAOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putAdBreaks">PutAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEditList">PutEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putElementaryStreams">PutElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEncryptions">PutEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putInputs">PutInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putManifests">PutManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putMuxStreams">PutMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOverlays">PutOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetAdBreaks">ResetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetEditList">ResetEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetEncryptions">ResetEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetManifests">ResetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetOverlays">ResetOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetPubsubDestination">ResetPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdBreaks` <a name="PutAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putAdBreaks"></a>

```go
func PutAdBreaks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEditList` <a name="PutEditList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEditList"></a>

```go
func PutEditList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutElementaryStreams` <a name="PutElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putElementaryStreams"></a>

```go
func PutElementaryStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEncryptions` <a name="PutEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEncryptions"></a>

```go
func PutEncryptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInputs` <a name="PutInputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putInputs"></a>

```go
func PutInputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManifests` <a name="PutManifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putManifests"></a>

```go
func PutManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMuxStreams` <a name="PutMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putMuxStreams"></a>

```go
func PutMuxStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOutput"></a>

```go
func PutOutput(value GoogleTranscoderJobTemplateConfigOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a>

---

##### `PutOverlays` <a name="PutOverlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOverlays"></a>

```go
func PutOverlays(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putPubsubDestination"></a>

```go
func PutPubsubDestination(value GoogleTranscoderJobTemplateConfigPubsubDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a>

---

##### `ResetAdBreaks` <a name="ResetAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetAdBreaks"></a>

```go
func ResetAdBreaks()
```

##### `ResetEditList` <a name="ResetEditList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetEditList"></a>

```go
func ResetEditList()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetElementaryStreams"></a>

```go
func ResetElementaryStreams()
```

##### `ResetEncryptions` <a name="ResetEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetEncryptions"></a>

```go
func ResetEncryptions()
```

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetInputs"></a>

```go
func ResetInputs()
```

##### `ResetManifests` <a name="ResetManifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetManifests"></a>

```go
func ResetManifests()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetMuxStreams"></a>

```go
func ResetMuxStreams()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetOutput"></a>

```go
func ResetOutput()
```

##### `ResetOverlays` <a name="ResetOverlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetOverlays"></a>

```go
func ResetOverlays()
```

##### `ResetPubsubDestination` <a name="ResetPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.resetPubsubDestination"></a>

```go
func ResetPubsubDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList">GoogleTranscoderJobTemplateConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.editList">EditList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList">GoogleTranscoderJobTemplateConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList">GoogleTranscoderJobTemplateConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.encryptions">Encryptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList">GoogleTranscoderJobTemplateConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.inputs">Inputs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList">GoogleTranscoderJobTemplateConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.manifests">Manifests</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList">GoogleTranscoderJobTemplateConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.muxStreams">MuxStreams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList">GoogleTranscoderJobTemplateConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference">GoogleTranscoderJobTemplateConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.overlays">Overlays</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList">GoogleTranscoderJobTemplateConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference">GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.adBreaksInput">AdBreaksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.editListInput">EditListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.encryptionsInput">EncryptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.inputsInput">InputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.manifestsInput">ManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.overlaysInput">OverlaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.adBreaks"></a>

```go
func AdBreaks() GoogleTranscoderJobTemplateConfigAdBreaksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAdBreaksList">GoogleTranscoderJobTemplateConfigAdBreaksList</a>

---

##### `EditList`<sup>Required</sup> <a name="EditList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.editList"></a>

```go
func EditList() GoogleTranscoderJobTemplateConfigEditListStructList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList">GoogleTranscoderJobTemplateConfigEditListStructList</a>

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.elementaryStreams"></a>

```go
func ElementaryStreams() GoogleTranscoderJobTemplateConfigElementaryStreamsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList">GoogleTranscoderJobTemplateConfigElementaryStreamsList</a>

---

##### `Encryptions`<sup>Required</sup> <a name="Encryptions" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.encryptions"></a>

```go
func Encryptions() GoogleTranscoderJobTemplateConfigEncryptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList">GoogleTranscoderJobTemplateConfigEncryptionsList</a>

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.inputs"></a>

```go
func Inputs() GoogleTranscoderJobTemplateConfigInputsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList">GoogleTranscoderJobTemplateConfigInputsList</a>

---

##### `Manifests`<sup>Required</sup> <a name="Manifests" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.manifests"></a>

```go
func Manifests() GoogleTranscoderJobTemplateConfigManifestsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList">GoogleTranscoderJobTemplateConfigManifestsList</a>

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.muxStreams"></a>

```go
func MuxStreams() GoogleTranscoderJobTemplateConfigMuxStreamsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList">GoogleTranscoderJobTemplateConfigMuxStreamsList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.output"></a>

```go
func Output() GoogleTranscoderJobTemplateConfigOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference">GoogleTranscoderJobTemplateConfigOutputOutputReference</a>

---

##### `Overlays`<sup>Required</sup> <a name="Overlays" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.overlays"></a>

```go
func Overlays() GoogleTranscoderJobTemplateConfigOverlaysList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList">GoogleTranscoderJobTemplateConfigOverlaysList</a>

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.pubsubDestination"></a>

```go
func PubsubDestination() GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference">GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference</a>

---

##### `AdBreaksInput`<sup>Optional</sup> <a name="AdBreaksInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.adBreaksInput"></a>

```go
func AdBreaksInput() interface{}
```

- *Type:* interface{}

---

##### `EditListInput`<sup>Optional</sup> <a name="EditListInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.editListInput"></a>

```go
func EditListInput() interface{}
```

- *Type:* interface{}

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput"></a>

```go
func ElementaryStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionsInput`<sup>Optional</sup> <a name="EncryptionsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.encryptionsInput"></a>

```go
func EncryptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.inputsInput"></a>

```go
func InputsInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestsInput`<sup>Optional</sup> <a name="ManifestsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.manifestsInput"></a>

```go
func ManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput"></a>

```go
func MuxStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.outputInput"></a>

```go
func OutputInput() GoogleTranscoderJobTemplateConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a>

---

##### `OverlaysInput`<sup>Optional</sup> <a name="OverlaysInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.overlaysInput"></a>

```go
func OverlaysInput() interface{}
```

- *Type:* interface{}

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput"></a>

```go
func PubsubDestinationInput() GoogleTranscoderJobTemplateConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigA">GoogleTranscoderJobTemplateConfigA</a>

---


### GoogleTranscoderJobTemplateConfigEditListStructList <a name="GoogleTranscoderJobTemplateConfigEditListStructList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEditListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTranscoderJobTemplateConfigEditListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.get"></a>

```go
func Get(index *f64) GoogleTranscoderJobTemplateConfigEditListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigEditListStructOutputReference <a name="GoogleTranscoderJobTemplateConfigEditListStructOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEditListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTranscoderJobTemplateConfigEditListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetInputs"></a>

```go
func ResetInputs()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">ResetChannelCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">ResetChannelLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec">ResetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">ResetSampleRateHertz</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelCount` <a name="ResetChannelCount" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```go
func ResetChannelCount()
```

##### `ResetChannelLayout` <a name="ResetChannelLayout" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```go
func ResetChannelLayout()
```

##### `ResetCodec` <a name="ResetCodec" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```go
func ResetCodec()
```

##### `ResetSampleRateHertz` <a name="ResetSampleRateHertz" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```go
func ResetSampleRateHertz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">ChannelCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">ChannelLayoutInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">CodecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">SampleRateHertzInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">ChannelCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">ChannelLayout</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec">Codec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">SampleRateHertz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```go
func BitrateBpsInput() *f64
```

- *Type:* *f64

---

##### `ChannelCountInput`<sup>Optional</sup> <a name="ChannelCountInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```go
func ChannelCountInput() *f64
```

- *Type:* *f64

---

##### `ChannelLayoutInput`<sup>Optional</sup> <a name="ChannelLayoutInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```go
func ChannelLayoutInput() *[]*string
```

- *Type:* *[]*string

---

##### `CodecInput`<sup>Optional</sup> <a name="CodecInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```go
func CodecInput() *string
```

- *Type:* *string

---

##### `SampleRateHertzInput`<sup>Optional</sup> <a name="SampleRateHertzInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```go
func SampleRateHertzInput() *f64
```

- *Type:* *f64

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```go
func BitrateBps() *f64
```

- *Type:* *f64

---

##### `ChannelCount`<sup>Required</sup> <a name="ChannelCount" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```go
func ChannelCount() *f64
```

- *Type:* *f64

---

##### `ChannelLayout`<sup>Required</sup> <a name="ChannelLayout" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```go
func ChannelLayout() *[]*string
```

- *Type:* *[]*string

---

##### `Codec`<sup>Required</sup> <a name="Codec" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```go
func Codec() *string
```

- *Type:* *string

---

##### `SampleRateHertz`<sup>Required</sup> <a name="SampleRateHertz" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```go
func SampleRateHertz() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsList <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigElementaryStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTranscoderJobTemplateConfigElementaryStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.get"></a>

```go
func Get(index *f64) GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream">PutAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream">PutVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream">ResetAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream">ResetVideoStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioStream` <a name="PutAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream"></a>

```go
func PutAudioStream(value GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `PutVideoStream` <a name="PutVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream"></a>

```go
func PutVideoStream(value GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `ResetAudioStream` <a name="ResetAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```go
func ResetAudioStream()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetVideoStream` <a name="ResetVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```go
func ResetVideoStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput">AudioStreamInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput">VideoStreamInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioStream`<sup>Required</sup> <a name="AudioStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream"></a>

```go
func AudioStream() GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `VideoStream`<sup>Required</sup> <a name="VideoStream" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream"></a>

```go
func VideoStream() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `AudioStreamInput`<sup>Optional</sup> <a name="AudioStreamInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```go
func AudioStreamInput() GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream">GoogleTranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VideoStreamInput`<sup>Optional</sup> <a name="VideoStreamInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```go
func VideoStreamInput() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">PutHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">PutSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">ResetCrfLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">ResetEntropyCoder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">ResetGopDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">ResetHeightPixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">ResetHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">ResetPixelFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">ResetPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">ResetRateControlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">ResetSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">ResetVbvFullnessBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">ResetVbvSizeBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">ResetWidthPixels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHlg` <a name="PutHlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```go
func PutHlg(value GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PutSdr` <a name="PutSdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```go
func PutSdr(value GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `ResetCrfLevel` <a name="ResetCrfLevel" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```go
func ResetCrfLevel()
```

##### `ResetEntropyCoder` <a name="ResetEntropyCoder" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```go
func ResetEntropyCoder()
```

##### `ResetGopDuration` <a name="ResetGopDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```go
func ResetGopDuration()
```

##### `ResetHeightPixels` <a name="ResetHeightPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```go
func ResetHeightPixels()
```

##### `ResetHlg` <a name="ResetHlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```go
func ResetHlg()
```

##### `ResetPixelFormat` <a name="ResetPixelFormat" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```go
func ResetPixelFormat()
```

##### `ResetPreset` <a name="ResetPreset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```go
func ResetPreset()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetRateControlMode` <a name="ResetRateControlMode" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```go
func ResetRateControlMode()
```

##### `ResetSdr` <a name="ResetSdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```go
func ResetSdr()
```

##### `ResetVbvFullnessBits` <a name="ResetVbvFullnessBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```go
func ResetVbvFullnessBits()
```

##### `ResetVbvSizeBits` <a name="ResetVbvSizeBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```go
func ResetVbvSizeBits()
```

##### `ResetWidthPixels` <a name="ResetWidthPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```go
func ResetWidthPixels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">CrfLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">EntropyCoderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">FrameRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">GopDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">HeightPixelsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">HlgInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">PixelFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">PresetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">RateControlModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">SdrInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">VbvFullnessBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">VbvSizeBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">WidthPixelsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">CrfLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">EntropyCoder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">FrameRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">GopDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">HeightPixels</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">PixelFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">Preset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">RateControlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">VbvSizeBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">WidthPixels</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hlg`<sup>Required</sup> <a name="Hlg" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```go
func Hlg() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `Sdr`<sup>Required</sup> <a name="Sdr" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```go
func Sdr() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```go
func BitrateBpsInput() *f64
```

- *Type:* *f64

---

##### `CrfLevelInput`<sup>Optional</sup> <a name="CrfLevelInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```go
func CrfLevelInput() *f64
```

- *Type:* *f64

---

##### `EntropyCoderInput`<sup>Optional</sup> <a name="EntropyCoderInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```go
func EntropyCoderInput() *string
```

- *Type:* *string

---

##### `FrameRateInput`<sup>Optional</sup> <a name="FrameRateInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```go
func FrameRateInput() *f64
```

- *Type:* *f64

---

##### `GopDurationInput`<sup>Optional</sup> <a name="GopDurationInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```go
func GopDurationInput() *string
```

- *Type:* *string

---

##### `HeightPixelsInput`<sup>Optional</sup> <a name="HeightPixelsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```go
func HeightPixelsInput() *f64
```

- *Type:* *f64

---

##### `HlgInput`<sup>Optional</sup> <a name="HlgInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```go
func HlgInput() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PixelFormatInput`<sup>Optional</sup> <a name="PixelFormatInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```go
func PixelFormatInput() *string
```

- *Type:* *string

---

##### `PresetInput`<sup>Optional</sup> <a name="PresetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```go
func PresetInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `RateControlModeInput`<sup>Optional</sup> <a name="RateControlModeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```go
func RateControlModeInput() *string
```

- *Type:* *string

---

##### `SdrInput`<sup>Optional</sup> <a name="SdrInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```go
func SdrInput() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `VbvFullnessBitsInput`<sup>Optional</sup> <a name="VbvFullnessBitsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```go
func VbvFullnessBitsInput() *f64
```

- *Type:* *f64

---

##### `VbvSizeBitsInput`<sup>Optional</sup> <a name="VbvSizeBitsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```go
func VbvSizeBitsInput() *f64
```

- *Type:* *f64

---

##### `WidthPixelsInput`<sup>Optional</sup> <a name="WidthPixelsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```go
func WidthPixelsInput() *f64
```

- *Type:* *f64

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```go
func BitrateBps() *f64
```

- *Type:* *f64

---

##### `CrfLevel`<sup>Required</sup> <a name="CrfLevel" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```go
func CrfLevel() *f64
```

- *Type:* *f64

---

##### `EntropyCoder`<sup>Required</sup> <a name="EntropyCoder" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```go
func EntropyCoder() *string
```

- *Type:* *string

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```go
func FrameRate() *f64
```

- *Type:* *f64

---

##### `GopDuration`<sup>Required</sup> <a name="GopDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```go
func GopDuration() *string
```

- *Type:* *string

---

##### `HeightPixels`<sup>Required</sup> <a name="HeightPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```go
func HeightPixels() *f64
```

- *Type:* *f64

---

##### `PixelFormat`<sup>Required</sup> <a name="PixelFormat" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```go
func PixelFormat() *string
```

- *Type:* *string

---

##### `Preset`<sup>Required</sup> <a name="Preset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```go
func Preset() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `RateControlMode`<sup>Required</sup> <a name="RateControlMode" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```go
func RateControlMode() *string
```

- *Type:* *string

---

##### `VbvFullnessBits`<sup>Required</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```go
func VbvFullnessBits() *f64
```

- *Type:* *f64

---

##### `VbvSizeBits`<sup>Required</sup> <a name="VbvSizeBits" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```go
func VbvSizeBits() *f64
```

- *Type:* *f64

---

##### `WidthPixels`<sup>Required</sup> <a name="WidthPixels" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```go
func WidthPixels() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference <a name="GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264">PutH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264">ResetH264</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutH264` <a name="PutH264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```go
func PutH264(value GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `ResetH264` <a name="ResetH264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```go
func ResetH264()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">H264Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `H264`<sup>Required</sup> <a name="H264" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```go
func H264() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `H264Input`<sup>Optional</sup> <a name="H264Input" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```go
func H264Input() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream">GoogleTranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey">PutClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay">PutFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready">PutPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine">PutWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey">ResetClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay">ResetFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready">ResetPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine">ResetWidevine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClearkey` <a name="PutClearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```go
func PutClearkey(value GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `PutFairplay` <a name="PutFairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```go
func PutFairplay(value GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PutPlayready` <a name="PutPlayready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```go
func PutPlayready(value GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `PutWidevine` <a name="PutWidevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```go
func PutWidevine(value GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `ResetClearkey` <a name="ResetClearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```go
func ResetClearkey()
```

##### `ResetFairplay` <a name="ResetFairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```go
func ResetFairplay()
```

##### `ResetPlayready` <a name="ResetPlayready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```go
func ResetPlayready()
```

##### `ResetWidevine` <a name="ResetWidevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```go
func ResetWidevine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">ClearkeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">FairplayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">PlayreadyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">WidevineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Clearkey`<sup>Required</sup> <a name="Clearkey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```go
func Clearkey() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `Fairplay`<sup>Required</sup> <a name="Fairplay" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```go
func Fairplay() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `Playready`<sup>Required</sup> <a name="Playready" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```go
func Playready() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `Widevine`<sup>Required</sup> <a name="Widevine" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```go
func Widevine() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `ClearkeyInput`<sup>Optional</sup> <a name="ClearkeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```go
func ClearkeyInput() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `FairplayInput`<sup>Optional</sup> <a name="FairplayInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```go
func FairplayInput() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PlayreadyInput`<sup>Optional</sup> <a name="PlayreadyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```go
func PlayreadyInput() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `WidevineInput`<sup>Optional</sup> <a name="WidevineInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```go
func WidevineInput() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsList <a name="GoogleTranscoderJobTemplateConfigEncryptionsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTranscoderJobTemplateConfigEncryptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.get"></a>

```go
func Get(index *f64) GoogleTranscoderJobTemplateConfigEncryptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTranscoderJobTemplateConfigEncryptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putAes128">PutAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems">PutDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc">PutMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes">PutSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource">PutSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128">ResetAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems">ResetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc">ResetMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes">ResetSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource">ResetSecretManagerKeySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAes128` <a name="PutAes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putAes128"></a>

```go
func PutAes128(value GoogleTranscoderJobTemplateConfigEncryptionsAes128)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putAes128.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `PutDrmSystems` <a name="PutDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems"></a>

```go
func PutDrmSystems(value GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `PutMpegCenc` <a name="PutMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc"></a>

```go
func PutMpegCenc(value GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `PutSampleAes` <a name="PutSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes"></a>

```go
func PutSampleAes(value GoogleTranscoderJobTemplateConfigEncryptionsSampleAes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `PutSecretManagerKeySource` <a name="PutSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```go
func PutSecretManagerKeySource(value GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `ResetAes128` <a name="ResetAes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128"></a>

```go
func ResetAes128()
```

##### `ResetDrmSystems` <a name="ResetDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems"></a>

```go
func ResetDrmSystems()
```

##### `ResetMpegCenc` <a name="ResetMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc"></a>

```go
func ResetMpegCenc()
```

##### `ResetSampleAes` <a name="ResetSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes"></a>

```go
func ResetSampleAes()
```

##### `ResetSecretManagerKeySource` <a name="ResetSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```go
func ResetSecretManagerKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference">GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input">Aes128Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput">DrmSystemsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput">MpegCencInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput">SampleAesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">SecretManagerKeySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aes128`<sup>Required</sup> <a name="Aes128" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128"></a>

```go
func Aes128() GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference">GoogleTranscoderJobTemplateConfigEncryptionsAes128OutputReference</a>

---

##### `DrmSystems`<sup>Required</sup> <a name="DrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems"></a>

```go
func DrmSystems() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `MpegCenc`<sup>Required</sup> <a name="MpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc"></a>

```go
func MpegCenc() GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a>

---

##### `SampleAes`<sup>Required</sup> <a name="SampleAes" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes"></a>

```go
func SampleAes() GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a>

---

##### `SecretManagerKeySource`<sup>Required</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```go
func SecretManagerKeySource() GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `Aes128Input`<sup>Optional</sup> <a name="Aes128Input" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input"></a>

```go
func Aes128Input() GoogleTranscoderJobTemplateConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsAes128">GoogleTranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `DrmSystemsInput`<sup>Optional</sup> <a name="DrmSystemsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```go
func DrmSystemsInput() GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems">GoogleTranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MpegCencInput`<sup>Optional</sup> <a name="MpegCencInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```go
func MpegCencInput() GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc">GoogleTranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `SampleAesInput`<sup>Optional</sup> <a name="SampleAesInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```go
func SampleAesInput() GoogleTranscoderJobTemplateConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `SecretManagerKeySourceInput`<sup>Optional</sup> <a name="SecretManagerKeySourceInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```go
func SecretManagerKeySourceInput() GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSampleAes">GoogleTranscoderJobTemplateConfigEncryptionsSampleAes</a>

---


### GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference <a name="GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---


### GoogleTranscoderJobTemplateConfigInputsList <a name="GoogleTranscoderJobTemplateConfigInputsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigInputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTranscoderJobTemplateConfigInputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.get"></a>

```go
func Get(index *f64) GoogleTranscoderJobTemplateConfigInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigInputsOutputReference <a name="GoogleTranscoderJobTemplateConfigInputsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigInputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTranscoderJobTemplateConfigInputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigInputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigManifestsList <a name="GoogleTranscoderJobTemplateConfigManifestsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTranscoderJobTemplateConfigManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.get"></a>

```go
func Get(index *f64) GoogleTranscoderJobTemplateConfigManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigManifestsOutputReference <a name="GoogleTranscoderJobTemplateConfigManifestsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTranscoderJobTemplateConfigManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetFileName"></a>

```go
func ResetFileName()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams"></a>

```go
func ResetMuxStreams()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams">MuxStreams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput"></a>

```go
func FileNameInput() *string
```

- *Type:* *string

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput"></a>

```go
func MuxStreamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams"></a>

```go
func MuxStreams() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigMuxStreamsList <a name="GoogleTranscoderJobTemplateConfigMuxStreamsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigMuxStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTranscoderJobTemplateConfigMuxStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.get"></a>

```go
func Get(index *f64) GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference <a name="GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigMuxStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings">PutSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId">ResetEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings">ResetSegmentSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentSettings` <a name="PutSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```go
func PutSegmentSettings(value GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```go
func ResetElementaryStreams()
```

##### `ResetEncryptionId` <a name="ResetEncryptionId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```go
func ResetEncryptionId()
```

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName"></a>

```go
func ResetFileName()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetSegmentSettings` <a name="ResetSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```go
func ResetSegmentSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput">EncryptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput">SegmentSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId">EncryptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentSettings`<sup>Required</sup> <a name="SegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```go
func SegmentSettings() GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```go
func ElementaryStreamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionIdInput`<sup>Optional</sup> <a name="EncryptionIdInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```go
func EncryptionIdInput() *string
```

- *Type:* *string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```go
func FileNameInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SegmentSettingsInput`<sup>Optional</sup> <a name="SegmentSettingsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```go
func SegmentSettingsInput() GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```go
func ElementaryStreams() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionId`<sup>Required</sup> <a name="EncryptionId" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId"></a>

```go
func EncryptionId() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference <a name="GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">ResetSegmentDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSegmentDuration` <a name="ResetSegmentDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```go
func ResetSegmentDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">SegmentDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">SegmentDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentDurationInput`<sup>Optional</sup> <a name="SegmentDurationInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```go
func SegmentDurationInput() *string
```

- *Type:* *string

---

##### `SegmentDuration`<sup>Required</sup> <a name="SegmentDuration" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```go
func SegmentDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings">GoogleTranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---


### GoogleTranscoderJobTemplateConfigOutputOutputReference <a name="GoogleTranscoderJobTemplateConfigOutputOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOutput">GoogleTranscoderJobTemplateConfigOutput</a>

---


### GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">PutXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">ResetXy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutXy` <a name="PutXy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```go
func PutXy(value GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```go
func ResetEndTimeOffset()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```

##### `ResetXy` <a name="ResetXy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```go
func ResetXy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">FadeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">XyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">FadeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Xy`<sup>Required</sup> <a name="Xy" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```go
func Xy() GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```go
func EndTimeOffsetInput() *string
```

- *Type:* *string

---

##### `FadeTypeInput`<sup>Optional</sup> <a name="FadeTypeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```go
func FadeTypeInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `XyInput`<sup>Optional</sup> <a name="XyInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```go
func XyInput() GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```go
func EndTimeOffset() *string
```

- *Type:* *string

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```go
func FadeType() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---


### GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetX` <a name="ResetX" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```go
func ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```go
func ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">XInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">YInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">X</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">Y</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```go
func XInput() *f64
```

- *Type:* *f64

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```go
func YInput() *f64
```

- *Type:* *f64

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```go
func X() *f64
```

- *Type:* *f64

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```go
func Y() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---


### GoogleTranscoderJobTemplateConfigOverlaysAnimationsList <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigOverlaysAnimationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTranscoderJobTemplateConfigOverlaysAnimationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.get"></a>

```go
func Get(index *f64) GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade">PutAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade">ResetAnimationFade</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimationFade` <a name="PutAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```go
func PutAnimationFade(value GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `ResetAnimationFade` <a name="ResetAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```go
func ResetAnimationFade()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput">AnimationFadeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnimationFade`<sup>Required</sup> <a name="AnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```go
func AnimationFade() GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `AnimationFadeInput`<sup>Optional</sup> <a name="AnimationFadeInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```go
func AnimationFadeInput() GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigOverlaysImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a>

---


### GoogleTranscoderJobTemplateConfigOverlaysList <a name="GoogleTranscoderJobTemplateConfigOverlaysList" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigOverlaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTranscoderJobTemplateConfigOverlaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.get"></a>

```go
func Get(index *f64) GoogleTranscoderJobTemplateConfigOverlaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigOverlaysOutputReference <a name="GoogleTranscoderJobTemplateConfigOverlaysOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigOverlaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTranscoderJobTemplateConfigOverlaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putAnimations">PutAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations">ResetAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimations` <a name="PutAnimations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putAnimations"></a>

```go
func PutAnimations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putImage"></a>

```go
func PutImage(value GoogleTranscoderJobTemplateConfigOverlaysImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a>

---

##### `ResetAnimations` <a name="ResetAnimations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations"></a>

```go
func ResetAnimations()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.resetImage"></a>

```go
func ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.animations">Animations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList">GoogleTranscoderJobTemplateConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference">GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput">AnimationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Animations`<sup>Required</sup> <a name="Animations" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.animations"></a>

```go
func Animations() GoogleTranscoderJobTemplateConfigOverlaysAnimationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysAnimationsList">GoogleTranscoderJobTemplateConfigOverlaysAnimationsList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.image"></a>

```go
func Image() GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference">GoogleTranscoderJobTemplateConfigOverlaysImageOutputReference</a>

---

##### `AnimationsInput`<sup>Optional</sup> <a name="AnimationsInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput"></a>

```go
func AnimationsInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput"></a>

```go
func ImageInput() GoogleTranscoderJobTemplateConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysImage">GoogleTranscoderJobTemplateConfigOverlaysImage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference <a name="GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic"></a>

```go
func ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTranscoderJobTemplateConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateConfigPubsubDestination">GoogleTranscoderJobTemplateConfigPubsubDestination</a>

---


### GoogleTranscoderJobTemplateTimeoutsOutputReference <a name="GoogleTranscoderJobTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googletranscoderjobtemplate"

googletranscoderjobtemplate.NewGoogleTranscoderJobTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTranscoderJobTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTranscoderJobTemplate.GoogleTranscoderJobTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



