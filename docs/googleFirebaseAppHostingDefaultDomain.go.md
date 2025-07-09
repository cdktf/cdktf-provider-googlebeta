# `googleFirebaseAppHostingDefaultDomain` Submodule <a name="`googleFirebaseAppHostingDefaultDomain` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppHostingDefaultDomain <a name="GoogleFirebaseAppHostingDefaultDomain" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain google_firebase_app_hosting_default_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefirebaseapphostingdefaultdomain"

googlefirebaseapphostingdefaultdomain.NewGoogleFirebaseAppHostingDefaultDomain(scope Construct, id *string, config GoogleFirebaseAppHostingDefaultDomainConfig) GoogleFirebaseAppHostingDefaultDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig">GoogleFirebaseAppHostingDefaultDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig">GoogleFirebaseAppHostingDefaultDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseAppHostingDefaultDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts">GoogleFirebaseAppHostingDefaultDomainTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppHostingDefaultDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefirebaseapphostingdefaultdomain"

googlefirebaseapphostingdefaultdomain.GoogleFirebaseAppHostingDefaultDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefirebaseapphostingdefaultdomain"

googlefirebaseapphostingdefaultdomain.GoogleFirebaseAppHostingDefaultDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefirebaseapphostingdefaultdomain"

googlefirebaseapphostingdefaultdomain.GoogleFirebaseAppHostingDefaultDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefirebaseapphostingdefaultdomain"

googlefirebaseapphostingdefaultdomain.GoogleFirebaseAppHostingDefaultDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFirebaseAppHostingDefaultDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseAppHostingDefaultDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseAppHostingDefaultDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppHostingDefaultDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference">GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference">GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppHostingDefaultDomainConfig <a name="GoogleFirebaseAppHostingDefaultDomainConfig" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefirebaseapphostingdefaultdomain"

&googlefirebaseapphostingdefaultdomain.GoogleFirebaseAppHostingDefaultDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	DomainId: *string,
	Location: *string,
	Disabled: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.backend">Backend</a></code> | <code>*string</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.domainId">DomainId</a></code> | <code>*string</code> | Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the domain is disabled. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#id GoogleFirebaseAppHostingDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#project GoogleFirebaseAppHostingDefaultDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts">GoogleFirebaseAppHostingDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#backend GoogleFirebaseAppHostingDefaultDomain#backend}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#domain_id GoogleFirebaseAppHostingDefaultDomain#domain_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#location GoogleFirebaseAppHostingDefaultDomain#location}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the domain is disabled. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#disabled GoogleFirebaseAppHostingDefaultDomain#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#id GoogleFirebaseAppHostingDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#project GoogleFirebaseAppHostingDefaultDomain#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseAppHostingDefaultDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts">GoogleFirebaseAppHostingDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#timeouts GoogleFirebaseAppHostingDefaultDomain#timeouts}

---

### GoogleFirebaseAppHostingDefaultDomainTimeouts <a name="GoogleFirebaseAppHostingDefaultDomainTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefirebaseapphostingdefaultdomain"

&googlefirebaseapphostingdefaultdomain.GoogleFirebaseAppHostingDefaultDomainTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#create GoogleFirebaseAppHostingDefaultDomain#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#delete GoogleFirebaseAppHostingDefaultDomain#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#update GoogleFirebaseAppHostingDefaultDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#create GoogleFirebaseAppHostingDefaultDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#delete GoogleFirebaseAppHostingDefaultDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_firebase_app_hosting_default_domain#update GoogleFirebaseAppHostingDefaultDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference <a name="GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefirebaseapphostingdefaultdomain"

googlefirebaseapphostingdefaultdomain.NewGoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingDefaultDomain.GoogleFirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



