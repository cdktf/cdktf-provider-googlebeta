# `googleManagedKafkaAcl` Submodule <a name="`googleManagedKafkaAcl` Submodule" id="@cdktf/provider-google-beta.googleManagedKafkaAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaAcl <a name="GoogleManagedKafkaAcl" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl google_managed_kafka_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

googlemanagedkafkaacl.NewGoogleManagedKafkaAcl(scope Construct, id *string, config GoogleManagedKafkaAclConfig) GoogleManagedKafkaAcl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig">GoogleManagedKafkaAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig">GoogleManagedKafkaAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putAclEntries">PutAclEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAclEntries` <a name="PutAclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putAclEntries"></a>

```go
func PutAclEntries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putAclEntries.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putTimeouts"></a>

```go
func PutTimeouts(value GoogleManagedKafkaAclTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleManagedKafkaAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

googlemanagedkafkaacl.GoogleManagedKafkaAcl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

googlemanagedkafkaacl.GoogleManagedKafkaAcl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

googlemanagedkafkaacl.GoogleManagedKafkaAcl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

googlemanagedkafkaacl.GoogleManagedKafkaAcl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleManagedKafkaAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleManagedKafkaAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleManagedKafkaAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntries">AclEntries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList">GoogleManagedKafkaAclAclEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference">GoogleManagedKafkaAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntriesInput">AclEntriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclIdInput">AclIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclId">AclId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AclEntries`<sup>Required</sup> <a name="AclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntries"></a>

```go
func AclEntries() GoogleManagedKafkaAclAclEntriesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList">GoogleManagedKafkaAclAclEntriesList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeouts"></a>

```go
func Timeouts() GoogleManagedKafkaAclTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference">GoogleManagedKafkaAclTimeoutsOutputReference</a>

---

##### `AclEntriesInput`<sup>Optional</sup> <a name="AclEntriesInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclEntriesInput"></a>

```go
func AclEntriesInput() interface{}
```

- *Type:* interface{}

---

##### `AclIdInput`<sup>Optional</sup> <a name="AclIdInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclIdInput"></a>

```go
func AclIdInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.aclId"></a>

```go
func AclId() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAcl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaAclAclEntries <a name="GoogleManagedKafkaAclAclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

&googlemanagedkafkaacl.GoogleManagedKafkaAclAclEntries {
	Operation: *string,
	Principal: *string,
	Host: *string,
	PermissionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.operation">Operation</a></code> | <code>*string</code> | The operation type. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.principal">Principal</a></code> | <code>*string</code> | The principal. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.host">Host</a></code> | <code>*string</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.permissionType">PermissionType</a></code> | <code>*string</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#operation GoogleManagedKafkaAcl#operation}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

The principal.

Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#principal GoogleManagedKafkaAcl#principal}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.host"></a>

```go
Host *string
```

- *Type:* *string

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#host GoogleManagedKafkaAcl#host}

---

##### `PermissionType`<sup>Optional</sup> <a name="PermissionType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntries.property.permissionType"></a>

```go
PermissionType *string
```

- *Type:* *string

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#permission_type GoogleManagedKafkaAcl#permission_type}

---

### GoogleManagedKafkaAclConfig <a name="GoogleManagedKafkaAclConfig" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

&googlemanagedkafkaacl.GoogleManagedKafkaAclConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AclEntries: interface{},
	AclId: *string,
	Cluster: *string,
	Location: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclEntries">AclEntries</a></code> | <code>interface{}</code> | acl_entries block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclId">AclId</a></code> | <code>*string</code> | The ID to use for the acl, which will become the final component of the acl's name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.location">Location</a></code> | <code>*string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#id GoogleManagedKafkaAcl#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#project GoogleManagedKafkaAcl#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AclEntries`<sup>Required</sup> <a name="AclEntries" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclEntries"></a>

```go
AclEntries interface{}
```

- *Type:* interface{}

acl_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#acl_entries GoogleManagedKafkaAcl#acl_entries}

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.aclId"></a>

```go
AclId *string
```

- *Type:* *string

The ID to use for the acl, which will become the final component of the acl's name.

The structure of 'aclId' defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. 'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#acl_id GoogleManagedKafkaAcl#acl_id}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#cluster GoogleManagedKafkaAcl#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#location GoogleManagedKafkaAcl#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#id GoogleManagedKafkaAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#project GoogleManagedKafkaAcl#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclConfig.property.timeouts"></a>

```go
Timeouts GoogleManagedKafkaAclTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts">GoogleManagedKafkaAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#timeouts GoogleManagedKafkaAcl#timeouts}

---

### GoogleManagedKafkaAclTimeouts <a name="GoogleManagedKafkaAclTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

&googlemanagedkafkaacl.GoogleManagedKafkaAclTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#create GoogleManagedKafkaAcl#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#delete GoogleManagedKafkaAcl#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#update GoogleManagedKafkaAcl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#create GoogleManagedKafkaAcl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#delete GoogleManagedKafkaAcl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_managed_kafka_acl#update GoogleManagedKafkaAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaAclAclEntriesList <a name="GoogleManagedKafkaAclAclEntriesList" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

googlemanagedkafkaacl.NewGoogleManagedKafkaAclAclEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleManagedKafkaAclAclEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.get"></a>

```go
func Get(index *f64) GoogleManagedKafkaAclAclEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleManagedKafkaAclAclEntriesOutputReference <a name="GoogleManagedKafkaAclAclEntriesOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

googlemanagedkafkaacl.NewGoogleManagedKafkaAclAclEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleManagedKafkaAclAclEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetPermissionType">ResetPermissionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPermissionType` <a name="ResetPermissionType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.resetPermissionType"></a>

```go
func ResetPermissionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput">PermissionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionType">PermissionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `PermissionTypeInput`<sup>Optional</sup> <a name="PermissionTypeInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionTypeInput"></a>

```go
func PermissionTypeInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.permissionType"></a>

```go
func PermissionType() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclAclEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleManagedKafkaAclTimeoutsOutputReference <a name="GoogleManagedKafkaAclTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlemanagedkafkaacl"

googlemanagedkafkaacl.NewGoogleManagedKafkaAclTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaAclTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaAcl.GoogleManagedKafkaAclTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



