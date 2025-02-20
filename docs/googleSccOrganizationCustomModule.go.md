# `googleSccOrganizationCustomModule` Submodule <a name="`googleSccOrganizationCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccOrganizationCustomModule <a name="GoogleSccOrganizationCustomModule" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module google_scc_organization_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.NewGoogleSccOrganizationCustomModule(scope Construct, id *string, config GoogleSccOrganizationCustomModuleConfig) GoogleSccOrganizationCustomModule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig">GoogleSccOrganizationCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig">GoogleSccOrganizationCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig">PutCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomConfig` <a name="PutCustomConfig" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig"></a>

```go
func PutCustomConfig(value GoogleSccOrganizationCustomModuleCustomConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSccOrganizationCustomModuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccOrganizationCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.GoogleSccOrganizationCustomModule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.GoogleSccOrganizationCustomModule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.GoogleSccOrganizationCustomModule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.GoogleSccOrganizationCustomModule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleSccOrganizationCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSccOrganizationCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSccOrganizationCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccOrganizationCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.ancestorModule">AncestorModule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference">GoogleSccOrganizationCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.lastEditor">LastEditor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference">GoogleSccOrganizationCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.customConfigInput">CustomConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.enablementStateInput">EnablementStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.enablementState">EnablementState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AncestorModule`<sup>Required</sup> <a name="AncestorModule" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.ancestorModule"></a>

```go
func AncestorModule() *string
```

- *Type:* *string

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.customConfig"></a>

```go
func CustomConfig() GoogleSccOrganizationCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference">GoogleSccOrganizationCustomModuleCustomConfigOutputReference</a>

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.lastEditor"></a>

```go
func LastEditor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.timeouts"></a>

```go
func Timeouts() GoogleSccOrganizationCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference">GoogleSccOrganizationCustomModuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CustomConfigInput`<sup>Optional</sup> <a name="CustomConfigInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.customConfigInput"></a>

```go
func CustomConfigInput() GoogleSccOrganizationCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnablementStateInput`<sup>Optional</sup> <a name="EnablementStateInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.enablementStateInput"></a>

```go
func EnablementStateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.enablementState"></a>

```go
func EnablementState() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccOrganizationCustomModuleConfig <a name="GoogleSccOrganizationCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

&googlesccorganizationcustommodule.GoogleSccOrganizationCustomModuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig,
	DisplayName: *string,
	EnablementState: *string,
	Organization: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.enablementState">EnablementState</a></code> | <code>*string</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.organization">Organization</a></code> | <code>*string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#id GoogleSccOrganizationCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.customConfig"></a>

```go
CustomConfig GoogleSccOrganizationCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#custom_config GoogleSccOrganizationCustomModule#custom_config}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#display_name GoogleSccOrganizationCustomModule#display_name}

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.enablementState"></a>

```go
EnablementState *string
```

- *Type:* *string

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#enablement_state GoogleSccOrganizationCustomModule#enablement_state}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#organization GoogleSccOrganizationCustomModule#organization}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#id GoogleSccOrganizationCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.timeouts"></a>

```go
Timeouts GoogleSccOrganizationCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#timeouts GoogleSccOrganizationCustomModule#timeouts}

---

### GoogleSccOrganizationCustomModuleCustomConfig <a name="GoogleSccOrganizationCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

&googlesccorganizationcustommodule.GoogleSccOrganizationCustomModuleCustomConfig {
	Predicate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate,
	Recommendation: *string,
	ResourceSelector: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector,
	Severity: *string,
	CustomOutput: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.recommendation">Recommendation</a></code> | <code>*string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.severity">Severity</a></code> | <code>*string</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.description">Description</a></code> | <code>*string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.predicate"></a>

```go
Predicate GoogleSccOrganizationCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#predicate GoogleSccOrganizationCustomModule#predicate}

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.recommendation"></a>

```go
Recommendation *string
```

- *Type:* *string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#recommendation GoogleSccOrganizationCustomModule#recommendation}

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.resourceSelector"></a>

```go
ResourceSelector GoogleSccOrganizationCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#resource_selector GoogleSccOrganizationCustomModule#resource_selector}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#severity GoogleSccOrganizationCustomModule#severity}

---

##### `CustomOutput`<sup>Optional</sup> <a name="CustomOutput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.customOutput"></a>

```go
CustomOutput GoogleSccOrganizationCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#custom_output GoogleSccOrganizationCustomModule#custom_output}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#description GoogleSccOrganizationCustomModule#description}

---

### GoogleSccOrganizationCustomModuleCustomConfigCustomOutput <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

&googlesccorganizationcustommodule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput {
	Properties: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput.property.properties">Properties</a></code> | <code>interface{}</code> | properties block. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput.property.properties"></a>

```go
Properties interface{}
```

- *Type:* interface{}

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#properties GoogleSccOrganizationCustomModule#properties}

---

### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

&googlesccorganizationcustommodule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties {
	Name: *string,
	ValueExpression: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.name">Name</a></code> | <code>*string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#name GoogleSccOrganizationCustomModule#name}

---

##### `ValueExpression`<sup>Optional</sup> <a name="ValueExpression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```go
ValueExpression GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#value_expression GoogleSccOrganizationCustomModule#value_expression}

---

### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

&googlesccorganizationcustommodule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#expression GoogleSccOrganizationCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#description GoogleSccOrganizationCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#location GoogleSccOrganizationCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#title GoogleSccOrganizationCustomModule#title}

---

### GoogleSccOrganizationCustomModuleCustomConfigPredicate <a name="GoogleSccOrganizationCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

&googlesccorganizationcustommodule.GoogleSccOrganizationCustomModuleCustomConfigPredicate {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#expression GoogleSccOrganizationCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#description GoogleSccOrganizationCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#location GoogleSccOrganizationCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#title GoogleSccOrganizationCustomModule#title}

---

### GoogleSccOrganizationCustomModuleCustomConfigResourceSelector <a name="GoogleSccOrganizationCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

&googlesccorganizationcustommodule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector {
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | The resource types to run the detector on. |

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#resource_types GoogleSccOrganizationCustomModule#resource_types}

---

### GoogleSccOrganizationCustomModuleTimeouts <a name="GoogleSccOrganizationCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

&googlesccorganizationcustommodule.GoogleSccOrganizationCustomModuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#create GoogleSccOrganizationCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#delete GoogleSccOrganizationCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#update GoogleSccOrganizationCustomModule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#create GoogleSccOrganizationCustomModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#delete GoogleSccOrganizationCustomModule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_organization_custom_module#update GoogleSccOrganizationCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.NewGoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```go
func PutProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```go
func Properties() GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSccOrganizationCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.NewGoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```go
func Get(index *f64) GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.NewGoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">PutValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">ResetValueExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueExpression` <a name="PutValueExpression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```go
func PutValueExpression(value GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValueExpression` <a name="ResetValueExpression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```go
func ResetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">ValueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueExpression`<sup>Required</sup> <a name="ValueExpression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```go
func ValueExpression() GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueExpressionInput`<sup>Optional</sup> <a name="ValueExpressionInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```go
func ValueExpressionInput() GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.NewGoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccOrganizationCustomModuleCustomConfigOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.NewGoogleSccOrganizationCustomModuleCustomConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSccOrganizationCustomModuleCustomConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putCustomOutput">PutCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putResourceSelector">PutResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resetCustomOutput">ResetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomOutput` <a name="PutCustomOutput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```go
func PutCustomOutput(value GoogleSccOrganizationCustomModuleCustomConfigCustomOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a>

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putPredicate"></a>

```go
func PutPredicate(value GoogleSccOrganizationCustomModuleCustomConfigPredicate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a>

---

##### `PutResourceSelector` <a name="PutResourceSelector" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```go
func PutResourceSelector(value GoogleSccOrganizationCustomModuleCustomConfigResourceSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a>

---

##### `ResetCustomOutput` <a name="ResetCustomOutput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```go
func ResetCustomOutput()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference">GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.customOutputInput">CustomOutputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.predicateInput">PredicateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.recommendationInput">RecommendationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">ResourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomOutput`<sup>Required</sup> <a name="CustomOutput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```go
func CustomOutput() GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.predicate"></a>

```go
func Predicate() GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference">GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```go
func ResourceSelector() GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `CustomOutputInput`<sup>Optional</sup> <a name="CustomOutputInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```go
func CustomOutputInput() GoogleSccOrganizationCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```go
func PredicateInput() GoogleSccOrganizationCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a>

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```go
func RecommendationInput() *string
```

- *Type:* *string

---

##### `ResourceSelectorInput`<sup>Optional</sup> <a name="ResourceSelectorInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```go
func ResourceSelectorInput() GoogleSccOrganizationCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSccOrganizationCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a>

---


### GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.NewGoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSccOrganizationCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a>

---


### GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.NewGoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSccOrganizationCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccOrganizationCustomModuleTimeoutsOutputReference <a name="GoogleSccOrganizationCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesccorganizationcustommodule"

googlesccorganizationcustommodule.NewGoogleSccOrganizationCustomModuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSccOrganizationCustomModuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



