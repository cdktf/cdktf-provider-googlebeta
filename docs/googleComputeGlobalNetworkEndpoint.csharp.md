# `googleComputeGlobalNetworkEndpoint` Submodule <a name="`googleComputeGlobalNetworkEndpoint` Submodule" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeGlobalNetworkEndpoint <a name="GoogleComputeGlobalNetworkEndpoint" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint google_compute_global_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeGlobalNetworkEndpoint(Construct Scope, string Id, GoogleComputeGlobalNetworkEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig">GoogleComputeGlobalNetworkEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig">GoogleComputeGlobalNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeGlobalNetworkEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>

---

##### `ResetFqdn` <a name="ResetFqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetFqdn"></a>

```csharp
private void ResetFqdn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeGlobalNetworkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeGlobalNetworkEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeGlobalNetworkEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeGlobalNetworkEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeGlobalNetworkEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeGlobalNetworkEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeGlobalNetworkEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeGlobalNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeGlobalNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference">GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput">GlobalNetworkEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup">GlobalNetworkEndpointGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeouts"></a>

```csharp
public GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference">GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference</a>

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `GlobalNetworkEndpointGroupInput`<sup>Optional</sup> <a name="GlobalNetworkEndpointGroupInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput"></a>

```csharp
public string GlobalNetworkEndpointGroupInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `GlobalNetworkEndpointGroup`<sup>Required</sup> <a name="GlobalNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup"></a>

```csharp
public string GlobalNetworkEndpointGroup { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeGlobalNetworkEndpointConfig <a name="GoogleComputeGlobalNetworkEndpointConfig" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeGlobalNetworkEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GlobalNetworkEndpointGroup,
    double Port,
    string Fqdn = null,
    string Id = null,
    string IpAddress = null,
    string Project = null,
    GoogleComputeGlobalNetworkEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup">GlobalNetworkEndpointGroup</a></code> | <code>string</code> | The global network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.port">Port</a></code> | <code>double</code> | Port number of the external endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.fqdn">Fqdn</a></code> | <code>string</code> | Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#id GoogleComputeGlobalNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#project GoogleComputeGlobalNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GlobalNetworkEndpointGroup`<sup>Required</sup> <a name="GlobalNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup"></a>

```csharp
public string GlobalNetworkEndpointGroup { get; set; }
```

- *Type:* string

The global network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#global_network_endpoint_group GoogleComputeGlobalNetworkEndpoint#global_network_endpoint_group}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number of the external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#port GoogleComputeGlobalNetworkEndpoint#port}

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#fqdn GoogleComputeGlobalNetworkEndpoint#fqdn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#id GoogleComputeGlobalNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

IPv4 address external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#ip_address GoogleComputeGlobalNetworkEndpoint#ip_address}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#project GoogleComputeGlobalNetworkEndpoint#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.timeouts"></a>

```csharp
public GoogleComputeGlobalNetworkEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#timeouts GoogleComputeGlobalNetworkEndpoint#timeouts}

---

### GoogleComputeGlobalNetworkEndpointTimeouts <a name="GoogleComputeGlobalNetworkEndpointTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeGlobalNetworkEndpointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#create GoogleComputeGlobalNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#delete GoogleComputeGlobalNetworkEndpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#create GoogleComputeGlobalNetworkEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_global_network_endpoint#delete GoogleComputeGlobalNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference <a name="GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



