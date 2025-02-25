# `googleDiscoveryEngineTargetSite` Submodule <a name="`googleDiscoveryEngineTargetSite` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineTargetSite <a name="GoogleDiscoveryEngineTargetSite" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site google_discovery_engine_target_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.NewGoogleDiscoveryEngineTargetSite(scope Construct, id *string, config GoogleDiscoveryEngineTargetSiteConfig) GoogleDiscoveryEngineTargetSite
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig">GoogleDiscoveryEngineTargetSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig">GoogleDiscoveryEngineTargetSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDiscoveryEngineTargetSiteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a>

---

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetExactMatch"></a>

```go
func ResetExactMatch()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.GoogleDiscoveryEngineTargetSite_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.GoogleDiscoveryEngineTargetSite_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.GoogleDiscoveryEngineTargetSite_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.GoogleDiscoveryEngineTargetSite_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDiscoveryEngineTargetSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDiscoveryEngineTargetSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineTargetSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.failureReason">FailureReason</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList">GoogleDiscoveryEngineTargetSiteFailureReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.generatedUriPattern">GeneratedUriPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.indexingStatus">IndexingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.rootDomainUri">RootDomainUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.siteVerificationInfo">SiteVerificationInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList">GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.targetSiteId">TargetSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference">GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreIdInput">DataStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatchInput">ExactMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPatternInput">ProvidedUriPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreId">DataStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatch">ExactMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPattern">ProvidedUriPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.failureReason"></a>

```go
func FailureReason() GoogleDiscoveryEngineTargetSiteFailureReasonList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList">GoogleDiscoveryEngineTargetSiteFailureReasonList</a>

---

##### `GeneratedUriPattern`<sup>Required</sup> <a name="GeneratedUriPattern" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.generatedUriPattern"></a>

```go
func GeneratedUriPattern() *string
```

- *Type:* *string

---

##### `IndexingStatus`<sup>Required</sup> <a name="IndexingStatus" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.indexingStatus"></a>

```go
func IndexingStatus() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RootDomainUri`<sup>Required</sup> <a name="RootDomainUri" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.rootDomainUri"></a>

```go
func RootDomainUri() *string
```

- *Type:* *string

---

##### `SiteVerificationInfo`<sup>Required</sup> <a name="SiteVerificationInfo" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.siteVerificationInfo"></a>

```go
func SiteVerificationInfo() GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList">GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList</a>

---

##### `TargetSiteId`<sup>Required</sup> <a name="TargetSiteId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.targetSiteId"></a>

```go
func TargetSiteId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeouts"></a>

```go
func Timeouts() GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference">GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataStoreIdInput`<sup>Optional</sup> <a name="DataStoreIdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreIdInput"></a>

```go
func DataStoreIdInput() *string
```

- *Type:* *string

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatchInput"></a>

```go
func ExactMatchInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProvidedUriPatternInput`<sup>Optional</sup> <a name="ProvidedUriPatternInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPatternInput"></a>

```go
func ProvidedUriPatternInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreId"></a>

```go
func DataStoreId() *string
```

- *Type:* *string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatch"></a>

```go
func ExactMatch() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProvidedUriPattern`<sup>Required</sup> <a name="ProvidedUriPattern" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPattern"></a>

```go
func ProvidedUriPattern() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineTargetSiteConfig <a name="GoogleDiscoveryEngineTargetSiteConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

&googlediscoveryenginetargetsite.GoogleDiscoveryEngineTargetSiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataStoreId: *string,
	Location: *string,
	ProvidedUriPattern: *string,
	ExactMatch: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dataStoreId">DataStoreId</a></code> | <code>*string</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.providedUriPattern">ProvidedUriPattern</a></code> | <code>*string</code> | The user provided URI pattern from which the 'generated_uri_pattern' is generated. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.exactMatch">ExactMatch</a></code> | <code>interface{}</code> | If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#id GoogleDiscoveryEngineTargetSite#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#project GoogleDiscoveryEngineTargetSite#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.type">Type</a></code> | <code>*string</code> | The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dataStoreId"></a>

```go
DataStoreId *string
```

- *Type:* *string

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#data_store_id GoogleDiscoveryEngineTargetSite#data_store_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#location GoogleDiscoveryEngineTargetSite#location}

---

##### `ProvidedUriPattern`<sup>Required</sup> <a name="ProvidedUriPattern" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.providedUriPattern"></a>

```go
ProvidedUriPattern *string
```

- *Type:* *string

The user provided URI pattern from which the 'generated_uri_pattern' is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#provided_uri_pattern GoogleDiscoveryEngineTargetSite#provided_uri_pattern}

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.exactMatch"></a>

```go
ExactMatch interface{}
```

- *Type:* interface{}

If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern.

If set to true, an uri_pattern
is generated to try to be an exact match of the provided_uri_pattern or
just the specific page if the provided_uri_pattern is a specific one.
provided_uri_pattern is always normalized to generate the URI pattern to
be used by the search engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#exact_match GoogleDiscoveryEngineTargetSite#exact_match}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#id GoogleDiscoveryEngineTargetSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#project GoogleDiscoveryEngineTargetSite#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.timeouts"></a>

```go
Timeouts GoogleDiscoveryEngineTargetSiteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#timeouts GoogleDiscoveryEngineTargetSite#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#type GoogleDiscoveryEngineTargetSite#type}

---

### GoogleDiscoveryEngineTargetSiteFailureReason <a name="GoogleDiscoveryEngineTargetSiteFailureReason" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

&googlediscoveryenginetargetsite.GoogleDiscoveryEngineTargetSiteFailureReason {

}
```


### GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure <a name="GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

&googlediscoveryenginetargetsite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure {

}
```


### GoogleDiscoveryEngineTargetSiteSiteVerificationInfo <a name="GoogleDiscoveryEngineTargetSiteSiteVerificationInfo" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

&googlediscoveryenginetargetsite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo {

}
```


### GoogleDiscoveryEngineTargetSiteTimeouts <a name="GoogleDiscoveryEngineTargetSiteTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

&googlediscoveryenginetargetsite.GoogleDiscoveryEngineTargetSiteTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#create GoogleDiscoveryEngineTargetSite#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#delete GoogleDiscoveryEngineTargetSite#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#create GoogleDiscoveryEngineTargetSite#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_discovery_engine_target_site#delete GoogleDiscoveryEngineTargetSite#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineTargetSiteFailureReasonList <a name="GoogleDiscoveryEngineTargetSiteFailureReasonList" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.NewGoogleDiscoveryEngineTargetSiteFailureReasonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineTargetSiteFailureReasonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference <a name="GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.NewGoogleDiscoveryEngineTargetSiteFailureReasonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure">QuotaFailure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason">GoogleDiscoveryEngineTargetSiteFailureReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QuotaFailure`<sup>Required</sup> <a name="QuotaFailure" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure"></a>

```go
func QuotaFailure() GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineTargetSiteFailureReason
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason">GoogleDiscoveryEngineTargetSiteFailureReason</a>

---


### GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList <a name="GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.NewGoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference <a name="GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.NewGoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota">TotalRequiredQuota</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalRequiredQuota`<sup>Required</sup> <a name="TotalRequiredQuota" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota"></a>

```go
func TotalRequiredQuota() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure</a>

---


### GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList <a name="GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.NewGoogleDiscoveryEngineTargetSiteSiteVerificationInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference <a name="GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.NewGoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState">SiteVerificationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime">VerifyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo">GoogleDiscoveryEngineTargetSiteSiteVerificationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SiteVerificationState`<sup>Required</sup> <a name="SiteVerificationState" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState"></a>

```go
func SiteVerificationState() *string
```

- *Type:* *string

---

##### `VerifyTime`<sup>Required</sup> <a name="VerifyTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime"></a>

```go
func VerifyTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineTargetSiteSiteVerificationInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo">GoogleDiscoveryEngineTargetSiteSiteVerificationInfo</a>

---


### GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference <a name="GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlediscoveryenginetargetsite"

googlediscoveryenginetargetsite.NewGoogleDiscoveryEngineTargetSiteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



