# `googleComputeRegionNetworkEndpoint` Submodule <a name="`googleComputeRegionNetworkEndpoint` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkEndpoint <a name="GoogleComputeRegionNetworkEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint google_compute_region_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionNetworkEndpoint(Construct Scope, string Id, GoogleComputeRegionNetworkEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig">GoogleComputeRegionNetworkEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig">GoogleComputeRegionNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetClientDestinationPort">ResetClientDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeRegionNetworkEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeouts">GoogleComputeRegionNetworkEndpointTimeouts</a>

---

##### `ResetClientDestinationPort` <a name="ResetClientDestinationPort" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetClientDestinationPort"></a>

```csharp
private void ResetClientDestinationPort()
```

##### `ResetFqdn` <a name="ResetFqdn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetFqdn"></a>

```csharp
private void ResetFqdn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionNetworkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionNetworkEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionNetworkEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionNetworkEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionNetworkEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeRegionNetworkEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionNetworkEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.networkEndpointId">NetworkEndpointId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference">GoogleComputeRegionNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.clientDestinationPortInput">ClientDestinationPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.regionNetworkEndpointGroupInput">RegionNetworkEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.clientDestinationPort">ClientDestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.regionNetworkEndpointGroup">RegionNetworkEndpointGroup</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NetworkEndpointId`<sup>Required</sup> <a name="NetworkEndpointId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.networkEndpointId"></a>

```csharp
public double NetworkEndpointId { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.timeouts"></a>

```csharp
public GoogleComputeRegionNetworkEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference">GoogleComputeRegionNetworkEndpointTimeoutsOutputReference</a>

---

##### `ClientDestinationPortInput`<sup>Optional</sup> <a name="ClientDestinationPortInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.clientDestinationPortInput"></a>

```csharp
public double ClientDestinationPortInput { get; }
```

- *Type:* double

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegionNetworkEndpointGroupInput`<sup>Optional</sup> <a name="RegionNetworkEndpointGroupInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.regionNetworkEndpointGroupInput"></a>

```csharp
public string RegionNetworkEndpointGroupInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClientDestinationPort`<sup>Required</sup> <a name="ClientDestinationPort" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.clientDestinationPort"></a>

```csharp
public double ClientDestinationPort { get; }
```

- *Type:* double

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RegionNetworkEndpointGroup`<sup>Required</sup> <a name="RegionNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.regionNetworkEndpointGroup"></a>

```csharp
public string RegionNetworkEndpointGroup { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkEndpointConfig <a name="GoogleComputeRegionNetworkEndpointConfig" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionNetworkEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Port,
    string RegionNetworkEndpointGroup,
    double ClientDestinationPort = null,
    string Fqdn = null,
    string Id = null,
    string Instance = null,
    string IpAddress = null,
    string Project = null,
    string Region = null,
    GoogleComputeRegionNetworkEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.port">Port</a></code> | <code>double</code> | Port number of network endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.regionNetworkEndpointGroup">RegionNetworkEndpointGroup</a></code> | <code>string</code> | The network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.clientDestinationPort">ClientDestinationPort</a></code> | <code>double</code> | Client destination port for the 'GCE_VM_IP_PORTMAP' NEG. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.fqdn">Fqdn</a></code> | <code>string</code> | Fully qualified domain name of network endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#id GoogleComputeRegionNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.instance">Instance</a></code> | <code>string</code> | The name for a specific VM instance that the IP address belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#project GoogleComputeRegionNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where the containing network endpoint group is located. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeouts">GoogleComputeRegionNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number of network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#port GoogleComputeRegionNetworkEndpoint#port}

---

##### `RegionNetworkEndpointGroup`<sup>Required</sup> <a name="RegionNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.regionNetworkEndpointGroup"></a>

```csharp
public string RegionNetworkEndpointGroup { get; set; }
```

- *Type:* string

The network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#region_network_endpoint_group GoogleComputeRegionNetworkEndpoint#region_network_endpoint_group}

---

##### `ClientDestinationPort`<sup>Optional</sup> <a name="ClientDestinationPort" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.clientDestinationPort"></a>

```csharp
public double ClientDestinationPort { get; set; }
```

- *Type:* double

Client destination port for the 'GCE_VM_IP_PORTMAP' NEG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#client_destination_port GoogleComputeRegionNetworkEndpoint#client_destination_port}

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

Fully qualified domain name of network endpoint.

This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#fqdn GoogleComputeRegionNetworkEndpoint#fqdn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#id GoogleComputeRegionNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The name for a specific VM instance that the IP address belongs to.

This is required for network endpoints of type GCE_VM_IP_PORTMAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#instance GoogleComputeRegionNetworkEndpoint#instance}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

IPv4 address external endpoint.

This can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#ip_address GoogleComputeRegionNetworkEndpoint#ip_address}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#project GoogleComputeRegionNetworkEndpoint#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where the containing network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#region GoogleComputeRegionNetworkEndpoint#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointConfig.property.timeouts"></a>

```csharp
public GoogleComputeRegionNetworkEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeouts">GoogleComputeRegionNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#timeouts GoogleComputeRegionNetworkEndpoint#timeouts}

---

### GoogleComputeRegionNetworkEndpointTimeouts <a name="GoogleComputeRegionNetworkEndpointTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionNetworkEndpointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#create GoogleComputeRegionNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#delete GoogleComputeRegionNetworkEndpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#create GoogleComputeRegionNetworkEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_network_endpoint#delete GoogleComputeRegionNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkEndpointTimeoutsOutputReference <a name="GoogleComputeRegionNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionNetworkEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpoint.GoogleComputeRegionNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



