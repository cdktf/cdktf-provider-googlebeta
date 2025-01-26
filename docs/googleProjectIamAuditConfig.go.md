# `googleProjectIamAuditConfig` Submodule <a name="`googleProjectIamAuditConfig` Submodule" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectIamAuditConfig <a name="GoogleProjectIamAuditConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config google_project_iam_audit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprojectiamauditconfig"

googleprojectiamauditconfig.NewGoogleProjectIamAuditConfig(scope Construct, id *string, config GoogleProjectIamAuditConfigConfig) GoogleProjectIamAuditConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig">GoogleProjectIamAuditConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig">GoogleProjectIamAuditConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.putAuditLogConfig">PutAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuditLogConfig` <a name="PutAuditLogConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.putAuditLogConfig"></a>

```go
func PutAuditLogConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.putAuditLogConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleProjectIamAuditConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprojectiamauditconfig"

googleprojectiamauditconfig.GoogleProjectIamAuditConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprojectiamauditconfig"

googleprojectiamauditconfig.GoogleProjectIamAuditConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprojectiamauditconfig"

googleprojectiamauditconfig.GoogleProjectIamAuditConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprojectiamauditconfig"

googleprojectiamauditconfig.GoogleProjectIamAuditConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleProjectIamAuditConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleProjectIamAuditConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleProjectIamAuditConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProjectIamAuditConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList">GoogleProjectIamAuditConfigAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.auditLogConfigInput">AuditLogConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.auditLogConfig"></a>

```go
func AuditLogConfig() GoogleProjectIamAuditConfigAuditLogConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList">GoogleProjectIamAuditConfigAuditLogConfigList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `AuditLogConfigInput`<sup>Optional</sup> <a name="AuditLogConfigInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.auditLogConfigInput"></a>

```go
func AuditLogConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectIamAuditConfigAuditLogConfig <a name="GoogleProjectIamAuditConfigAuditLogConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprojectiamauditconfig"

&googleprojectiamauditconfig.GoogleProjectIamAuditConfigAuditLogConfig {
	LogType: *string,
	ExemptedMembers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.property.logType">LogType</a></code> | <code>*string</code> | Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.property.exemptedMembers">ExemptedMembers</a></code> | <code>*[]*string</code> | Identities that do not cause logging for this type of permission. |

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#log_type GoogleProjectIamAuditConfig#log_type}

---

##### `ExemptedMembers`<sup>Optional</sup> <a name="ExemptedMembers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.property.exemptedMembers"></a>

```go
ExemptedMembers *[]*string
```

- *Type:* *[]*string

Identities that do not cause logging for this type of permission.

Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#exempted_members GoogleProjectIamAuditConfig#exempted_members}

---

### GoogleProjectIamAuditConfigConfig <a name="GoogleProjectIamAuditConfigConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprojectiamauditconfig"

&googleprojectiamauditconfig.GoogleProjectIamAuditConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuditLogConfig: interface{},
	Project: *string,
	Service: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code>interface{}</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#project GoogleProjectIamAuditConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.service">Service</a></code> | <code>*string</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#id GoogleProjectIamAuditConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.auditLogConfig"></a>

```go
AuditLogConfig interface{}
```

- *Type:* interface{}

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#audit_log_config GoogleProjectIamAuditConfig#audit_log_config}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#project GoogleProjectIamAuditConfig#project}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#service GoogleProjectIamAuditConfig#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#id GoogleProjectIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectIamAuditConfigAuditLogConfigList <a name="GoogleProjectIamAuditConfigAuditLogConfigList" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprojectiamauditconfig"

googleprojectiamauditconfig.NewGoogleProjectIamAuditConfigAuditLogConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleProjectIamAuditConfigAuditLogConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.get"></a>

```go
func Get(index *f64) GoogleProjectIamAuditConfigAuditLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleProjectIamAuditConfigAuditLogConfigOutputReference <a name="GoogleProjectIamAuditConfigAuditLogConfigOutputReference" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleprojectiamauditconfig"

googleprojectiamauditconfig.NewGoogleProjectIamAuditConfigAuditLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleProjectIamAuditConfigAuditLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers">ResetExemptedMembers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExemptedMembers` <a name="ResetExemptedMembers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers"></a>

```go
func ResetExemptedMembers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput">ExemptedMembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers">ExemptedMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExemptedMembersInput`<sup>Optional</sup> <a name="ExemptedMembersInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput"></a>

```go
func ExemptedMembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `ExemptedMembers`<sup>Required</sup> <a name="ExemptedMembers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers"></a>

```go
func ExemptedMembers() *[]*string
```

- *Type:* *[]*string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



