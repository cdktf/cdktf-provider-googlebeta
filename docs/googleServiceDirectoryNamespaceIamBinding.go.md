# `googleServiceDirectoryNamespaceIamBinding` Submodule <a name="`googleServiceDirectoryNamespaceIamBinding` Submodule" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceDirectoryNamespaceIamBinding <a name="GoogleServiceDirectoryNamespaceIamBinding" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding google_service_directory_namespace_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicedirectorynamespaceiambinding"

googleservicedirectorynamespaceiambinding.NewGoogleServiceDirectoryNamespaceIamBinding(scope Construct, id *string, config GoogleServiceDirectoryNamespaceIamBindingConfig) GoogleServiceDirectoryNamespaceIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig">GoogleServiceDirectoryNamespaceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig">GoogleServiceDirectoryNamespaceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleServiceDirectoryNamespaceIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition">GoogleServiceDirectoryNamespaceIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleServiceDirectoryNamespaceIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicedirectorynamespaceiambinding"

googleservicedirectorynamespaceiambinding.GoogleServiceDirectoryNamespaceIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicedirectorynamespaceiambinding"

googleservicedirectorynamespaceiambinding.GoogleServiceDirectoryNamespaceIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicedirectorynamespaceiambinding"

googleservicedirectorynamespaceiambinding.GoogleServiceDirectoryNamespaceIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicedirectorynamespaceiambinding"

googleservicedirectorynamespaceiambinding.GoogleServiceDirectoryNamespaceIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleServiceDirectoryNamespaceIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleServiceDirectoryNamespaceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleServiceDirectoryNamespaceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceDirectoryNamespaceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference">GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition">GoogleServiceDirectoryNamespaceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.condition"></a>

```go
func Condition() GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference">GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleServiceDirectoryNamespaceIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition">GoogleServiceDirectoryNamespaceIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceDirectoryNamespaceIamBindingCondition <a name="GoogleServiceDirectoryNamespaceIamBindingCondition" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicedirectorynamespaceiambinding"

&googleservicedirectorynamespaceiambinding.GoogleServiceDirectoryNamespaceIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#expression GoogleServiceDirectoryNamespaceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#title GoogleServiceDirectoryNamespaceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#description GoogleServiceDirectoryNamespaceIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#expression GoogleServiceDirectoryNamespaceIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#title GoogleServiceDirectoryNamespaceIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#description GoogleServiceDirectoryNamespaceIamBinding#description}.

---

### GoogleServiceDirectoryNamespaceIamBindingConfig <a name="GoogleServiceDirectoryNamespaceIamBindingConfig" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicedirectorynamespaceiambinding"

&googleservicedirectorynamespaceiambinding.GoogleServiceDirectoryNamespaceIamBindingConfig {
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
	Condition: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#members GoogleServiceDirectoryNamespaceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#name GoogleServiceDirectoryNamespaceIamBinding#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#role GoogleServiceDirectoryNamespaceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition">GoogleServiceDirectoryNamespaceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#id GoogleServiceDirectoryNamespaceIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#members GoogleServiceDirectoryNamespaceIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#name GoogleServiceDirectoryNamespaceIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#role GoogleServiceDirectoryNamespaceIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.condition"></a>

```go
Condition GoogleServiceDirectoryNamespaceIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition">GoogleServiceDirectoryNamespaceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#condition GoogleServiceDirectoryNamespaceIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_directory_namespace_iam_binding#id GoogleServiceDirectoryNamespaceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference <a name="GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleservicedirectorynamespaceiambinding"

googleservicedirectorynamespaceiambinding.NewGoogleServiceDirectoryNamespaceIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition">GoogleServiceDirectoryNamespaceIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleServiceDirectoryNamespaceIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryNamespaceIamBinding.GoogleServiceDirectoryNamespaceIamBindingCondition">GoogleServiceDirectoryNamespaceIamBindingCondition</a>

---



