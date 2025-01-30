# `googleNetworkServicesEndpointPolicy` Submodule <a name="`googleNetworkServicesEndpointPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesEndpointPolicy <a name="GoogleNetworkServicesEndpointPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy google_network_services_endpoint_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.NewGoogleNetworkServicesEndpointPolicy(scope Construct, id *string, config GoogleNetworkServicesEndpointPolicyConfig) GoogleNetworkServicesEndpointPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig">GoogleNetworkServicesEndpointPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig">GoogleNetworkServicesEndpointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putEndpointMatcher">PutEndpointMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTrafficPortSelector">PutTrafficPortSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetAuthorizationPolicy">ResetAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetClientTlsPolicy">ResetClientTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetServerTlsPolicy">ResetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTrafficPortSelector">ResetTrafficPortSelector</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointMatcher` <a name="PutEndpointMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putEndpointMatcher"></a>

```go
func PutEndpointMatcher(value GoogleNetworkServicesEndpointPolicyEndpointMatcher)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putEndpointMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesEndpointPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>

---

##### `PutTrafficPortSelector` <a name="PutTrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTrafficPortSelector"></a>

```go
func PutTrafficPortSelector(value GoogleNetworkServicesEndpointPolicyTrafficPortSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTrafficPortSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

---

##### `ResetAuthorizationPolicy` <a name="ResetAuthorizationPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetAuthorizationPolicy"></a>

```go
func ResetAuthorizationPolicy()
```

##### `ResetClientTlsPolicy` <a name="ResetClientTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetClientTlsPolicy"></a>

```go
func ResetClientTlsPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServerTlsPolicy` <a name="ResetServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetServerTlsPolicy"></a>

```go
func ResetServerTlsPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrafficPortSelector` <a name="ResetTrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTrafficPortSelector"></a>

```go
func ResetTrafficPortSelector()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesEndpointPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkServicesEndpointPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesEndpointPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesEndpointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesEndpointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcher">EndpointMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference">GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelector">TrafficPortSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference">GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicyInput">AuthorizationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicyInput">ClientTlsPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcherInput">EndpointMatcherInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicyInput">ServerTlsPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelectorInput">TrafficPortSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicy">AuthorizationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicy">ClientTlsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EndpointMatcher`<sup>Required</sup> <a name="EndpointMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcher"></a>

```go
func EndpointMatcher() GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference">GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference</a>

---

##### `TrafficPortSelector`<sup>Required</sup> <a name="TrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelector"></a>

```go
func TrafficPortSelector() GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference">GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AuthorizationPolicyInput`<sup>Optional</sup> <a name="AuthorizationPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicyInput"></a>

```go
func AuthorizationPolicyInput() *string
```

- *Type:* *string

---

##### `ClientTlsPolicyInput`<sup>Optional</sup> <a name="ClientTlsPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicyInput"></a>

```go
func ClientTlsPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndpointMatcherInput`<sup>Optional</sup> <a name="EndpointMatcherInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcherInput"></a>

```go
func EndpointMatcherInput() GoogleNetworkServicesEndpointPolicyEndpointMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServerTlsPolicyInput`<sup>Optional</sup> <a name="ServerTlsPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicyInput"></a>

```go
func ServerTlsPolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficPortSelectorInput`<sup>Optional</sup> <a name="TrafficPortSelectorInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelectorInput"></a>

```go
func TrafficPortSelectorInput() GoogleNetworkServicesEndpointPolicyTrafficPortSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AuthorizationPolicy`<sup>Required</sup> <a name="AuthorizationPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicy"></a>

```go
func AuthorizationPolicy() *string
```

- *Type:* *string

---

##### `ClientTlsPolicy`<sup>Required</sup> <a name="ClientTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicy"></a>

```go
func ClientTlsPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServerTlsPolicy`<sup>Required</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicy"></a>

```go
func ServerTlsPolicy() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesEndpointPolicyConfig <a name="GoogleNetworkServicesEndpointPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

&googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointMatcher: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher,
	Name: *string,
	Type: *string,
	AuthorizationPolicy: *string,
	ClientTlsPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	ServerTlsPolicy: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts,
	TrafficPortSelector: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.endpointMatcher">EndpointMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | endpoint_matcher block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the EndpointPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.type">Type</a></code> | <code>*string</code> | The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.authorizationPolicy">AuthorizationPolicy</a></code> | <code>*string</code> | This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.clientTlsPolicy">ClientTlsPolicy</a></code> | <code>*string</code> | A URL referring to a ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#id GoogleNetworkServicesEndpointPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#project GoogleNetworkServicesEndpointPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>*string</code> | A URL referring to ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.trafficPortSelector">TrafficPortSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | traffic_port_selector block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointMatcher`<sup>Required</sup> <a name="EndpointMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.endpointMatcher"></a>

```go
EndpointMatcher GoogleNetworkServicesEndpointPolicyEndpointMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

endpoint_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#endpoint_matcher GoogleNetworkServicesEndpointPolicy#endpoint_matcher}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the EndpointPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#name GoogleNetworkServicesEndpointPolicy#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#type GoogleNetworkServicesEndpointPolicy#type}

---

##### `AuthorizationPolicy`<sup>Optional</sup> <a name="AuthorizationPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.authorizationPolicy"></a>

```go
AuthorizationPolicy *string
```

- *Type:* *string

This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#authorization_policy GoogleNetworkServicesEndpointPolicy#authorization_policy}

---

##### `ClientTlsPolicy`<sup>Optional</sup> <a name="ClientTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.clientTlsPolicy"></a>

```go
ClientTlsPolicy *string
```

- *Type:* *string

A URL referring to a ClientTlsPolicy resource.

ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#client_tls_policy GoogleNetworkServicesEndpointPolicy#client_tls_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#description GoogleNetworkServicesEndpointPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#id GoogleNetworkServicesEndpointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#labels GoogleNetworkServicesEndpointPolicy#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#project GoogleNetworkServicesEndpointPolicy#project}.

---

##### `ServerTlsPolicy`<sup>Optional</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.serverTlsPolicy"></a>

```go
ServerTlsPolicy *string
```

- *Type:* *string

A URL referring to ServerTlsPolicy resource.

ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#server_tls_policy GoogleNetworkServicesEndpointPolicy#server_tls_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesEndpointPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#timeouts GoogleNetworkServicesEndpointPolicy#timeouts}

---

##### `TrafficPortSelector`<sup>Optional</sup> <a name="TrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.trafficPortSelector"></a>

```go
TrafficPortSelector GoogleNetworkServicesEndpointPolicyTrafficPortSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

traffic_port_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#traffic_port_selector GoogleNetworkServicesEndpointPolicy#traffic_port_selector}

---

### GoogleNetworkServicesEndpointPolicyEndpointMatcher <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

&googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher {
	MetadataLabelMatcher: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher.property.metadataLabelMatcher">MetadataLabelMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | metadata_label_matcher block. |

---

##### `MetadataLabelMatcher`<sup>Required</sup> <a name="MetadataLabelMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher.property.metadataLabelMatcher"></a>

```go
MetadataLabelMatcher GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

metadata_label_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#metadata_label_matcher GoogleNetworkServicesEndpointPolicy#metadata_label_matcher}

---

### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

&googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher {
	MetadataLabelMatchCriteria: *string,
	MetadataLabels: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabelMatchCriteria">MetadataLabelMatchCriteria</a></code> | <code>*string</code> | Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabels">MetadataLabels</a></code> | <code>interface{}</code> | metadata_labels block. |

---

##### `MetadataLabelMatchCriteria`<sup>Required</sup> <a name="MetadataLabelMatchCriteria" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabelMatchCriteria"></a>

```go
MetadataLabelMatchCriteria *string
```

- *Type:* *string

Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#metadata_label_match_criteria GoogleNetworkServicesEndpointPolicy#metadata_label_match_criteria}

---

##### `MetadataLabels`<sup>Optional</sup> <a name="MetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabels"></a>

```go
MetadataLabels interface{}
```

- *Type:* interface{}

metadata_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#metadata_labels GoogleNetworkServicesEndpointPolicy#metadata_labels}

---

### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

&googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels {
	LabelName: *string,
	LabelValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelName">LabelName</a></code> | <code>*string</code> | Required. Label name presented as key in xDS Node Metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelValue">LabelValue</a></code> | <code>*string</code> | Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. |

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelName"></a>

```go
LabelName *string
```

- *Type:* *string

Required. Label name presented as key in xDS Node Metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#label_name GoogleNetworkServicesEndpointPolicy#label_name}

---

##### `LabelValue`<sup>Required</sup> <a name="LabelValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelValue"></a>

```go
LabelValue *string
```

- *Type:* *string

Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#label_value GoogleNetworkServicesEndpointPolicy#label_value}

---

### GoogleNetworkServicesEndpointPolicyTimeouts <a name="GoogleNetworkServicesEndpointPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

&googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#create GoogleNetworkServicesEndpointPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#delete GoogleNetworkServicesEndpointPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#update GoogleNetworkServicesEndpointPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#create GoogleNetworkServicesEndpointPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#delete GoogleNetworkServicesEndpointPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#update GoogleNetworkServicesEndpointPolicy#update}.

---

### GoogleNetworkServicesEndpointPolicyTrafficPortSelector <a name="GoogleNetworkServicesEndpointPolicyTrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

&googlenetworkservicesendpointpolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector {
	Ports: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector.property.ports">Ports</a></code> | <code>*[]*string</code> | List of ports. |

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

List of ports.

Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_services_endpoint_policy#ports GoogleNetworkServicesEndpointPolicy#ports}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.NewGoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.NewGoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelNameInput">LabelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValueInput">LabelValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelName">LabelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValue">LabelValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelNameInput`<sup>Optional</sup> <a name="LabelNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelNameInput"></a>

```go
func LabelNameInput() *string
```

- *Type:* *string

---

##### `LabelValueInput`<sup>Optional</sup> <a name="LabelValueInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValueInput"></a>

```go
func LabelValueInput() *string
```

- *Type:* *string

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelName"></a>

```go
func LabelName() *string
```

- *Type:* *string

---

##### `LabelValue`<sup>Required</sup> <a name="LabelValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValue"></a>

```go
func LabelValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.NewGoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels">PutMetadataLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resetMetadataLabels">ResetMetadataLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadataLabels` <a name="PutMetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels"></a>

```go
func PutMetadataLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMetadataLabels` <a name="ResetMetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resetMetadataLabels"></a>

```go
func ResetMetadataLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabels">MetadataLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteriaInput">MetadataLabelMatchCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelsInput">MetadataLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteria">MetadataLabelMatchCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataLabels`<sup>Required</sup> <a name="MetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabels"></a>

```go
func MetadataLabels() GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList</a>

---

##### `MetadataLabelMatchCriteriaInput`<sup>Optional</sup> <a name="MetadataLabelMatchCriteriaInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteriaInput"></a>

```go
func MetadataLabelMatchCriteriaInput() *string
```

- *Type:* *string

---

##### `MetadataLabelsInput`<sup>Optional</sup> <a name="MetadataLabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelsInput"></a>

```go
func MetadataLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataLabelMatchCriteria`<sup>Required</sup> <a name="MetadataLabelMatchCriteria" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteria"></a>

```go
func MetadataLabelMatchCriteria() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---


### GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.NewGoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher">PutMetadataLabelMatcher</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadataLabelMatcher` <a name="PutMetadataLabelMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher"></a>

```go
func PutMetadataLabelMatcher(value GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcher">MetadataLabelMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcherInput">MetadataLabelMatcherInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataLabelMatcher`<sup>Required</sup> <a name="MetadataLabelMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcher"></a>

```go
func MetadataLabelMatcher() GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference</a>

---

##### `MetadataLabelMatcherInput`<sup>Optional</sup> <a name="MetadataLabelMatcherInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcherInput"></a>

```go
func MetadataLabelMatcherInput() GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesEndpointPolicyEndpointMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

---


### GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference <a name="GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.NewGoogleNetworkServicesEndpointPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference <a name="GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesendpointpolicy"

googlenetworkservicesendpointpolicy.NewGoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesEndpointPolicyTrafficPortSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

---



