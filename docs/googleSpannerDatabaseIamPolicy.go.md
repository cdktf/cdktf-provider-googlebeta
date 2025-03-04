# `googleSpannerDatabaseIamPolicy` Submodule <a name="`googleSpannerDatabaseIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerDatabaseIamPolicy <a name="GoogleSpannerDatabaseIamPolicy" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy google_spanner_database_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerdatabaseiampolicy"

googlespannerdatabaseiampolicy.NewGoogleSpannerDatabaseIamPolicy(scope Construct, id *string, config GoogleSpannerDatabaseIamPolicyConfig) GoogleSpannerDatabaseIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig">GoogleSpannerDatabaseIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig">GoogleSpannerDatabaseIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSpannerDatabaseIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerdatabaseiampolicy"

googlespannerdatabaseiampolicy.GoogleSpannerDatabaseIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerdatabaseiampolicy"

googlespannerdatabaseiampolicy.GoogleSpannerDatabaseIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerdatabaseiampolicy"

googlespannerdatabaseiampolicy.GoogleSpannerDatabaseIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerdatabaseiampolicy"

googlespannerdatabaseiampolicy.GoogleSpannerDatabaseIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleSpannerDatabaseIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSpannerDatabaseIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSpannerDatabaseIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerDatabaseIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerDatabaseIamPolicyConfig <a name="GoogleSpannerDatabaseIamPolicyConfig" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlespannerdatabaseiampolicy"

&googlespannerdatabaseiampolicy.GoogleSpannerDatabaseIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Instance: *string,
	PolicyData: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#database GoogleSpannerDatabaseIamPolicy#database}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.instance">Instance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#instance GoogleSpannerDatabaseIamPolicy#instance}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#policy_data GoogleSpannerDatabaseIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#id GoogleSpannerDatabaseIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#project GoogleSpannerDatabaseIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#database GoogleSpannerDatabaseIamPolicy#database}.

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#instance GoogleSpannerDatabaseIamPolicy#instance}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#policy_data GoogleSpannerDatabaseIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#id GoogleSpannerDatabaseIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSpannerDatabaseIamPolicy.GoogleSpannerDatabaseIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_database_iam_policy#project GoogleSpannerDatabaseIamPolicy#project}.

---



