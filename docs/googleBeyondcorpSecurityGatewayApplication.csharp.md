# `googleBeyondcorpSecurityGatewayApplication` Submodule <a name="`googleBeyondcorpSecurityGatewayApplication` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGatewayApplication <a name="GoogleBeyondcorpSecurityGatewayApplication" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application google_beyondcorp_security_gateway_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplication(Construct Scope, string Id, GoogleBeyondcorpSecurityGatewayApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig">GoogleBeyondcorpSecurityGatewayApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig">GoogleBeyondcorpSecurityGatewayApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers">PutEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams">PutUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetUpstreams">ResetUpstreams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointMatchers` <a name="PutEndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers"></a>

```csharp
private void PutEndpointMatchers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBeyondcorpSecurityGatewayApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `PutUpstreams` <a name="PutUpstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams"></a>

```csharp
private void PutUpstreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpstreams` <a name="ResetUpstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetUpstreams"></a>

```csharp
private void ResetUpstreams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBeyondcorpSecurityGatewayApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBeyondcorpSecurityGatewayApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBeyondcorpSecurityGatewayApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBeyondcorpSecurityGatewayApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBeyondcorpSecurityGatewayApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBeyondcorpSecurityGatewayApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGatewayApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchers">EndpointMatchers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchersInput">EndpointMatchersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreamsInput">UpstreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EndpointMatchers`<sup>Required</sup> <a name="EndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchers"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList EndpointMatchers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeouts"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreams"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList Upstreams { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndpointMatchersInput`<sup>Optional</sup> <a name="EndpointMatchersInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchersInput"></a>

```csharp
public object EndpointMatchersInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput"></a>

```csharp
public string SecurityGatewayIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpstreamsInput`<sup>Optional</sup> <a name="UpstreamsInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreamsInput"></a>

```csharp
public object UpstreamsInput { get; }
```

- *Type:* object

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationConfig <a name="GoogleBeyondcorpSecurityGatewayApplicationConfig" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId,
    object EndpointMatchers,
    string SecurityGatewayId,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleBeyondcorpSecurityGatewayApplicationTimeouts Timeouts = null,
    object Upstreams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | User-settable Application resource ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers">EndpointMatchers</a></code> | <code>object</code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.upstreams">Upstreams</a></code> | <code>object</code> | upstreams block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#application_id GoogleBeyondcorpSecurityGatewayApplication#application_id}

---

##### `EndpointMatchers`<sup>Required</sup> <a name="EndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers"></a>

```csharp
public object EndpointMatchers { get; set; }
```

- *Type:* object

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#endpoint_matchers GoogleBeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; set; }
```

- *Type:* string

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#security_gateway_id GoogleBeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#display_name GoogleBeyondcorpSecurityGatewayApplication#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.timeouts"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#timeouts GoogleBeyondcorpSecurityGatewayApplication#timeouts}

---

##### `Upstreams`<sup>Optional</sup> <a name="Upstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.upstreams"></a>

```csharp
public object Upstreams { get; set; }
```

- *Type:* object

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#upstreams GoogleBeyondcorpSecurityGatewayApplication#upstreams}

---

### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers {
    string Hostname,
    double[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname">Hostname</a></code> | <code>string</code> | Required. Hostname of the application. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports">Ports</a></code> | <code>double[]</code> | Optional. Ports of the application. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#hostname GoogleBeyondcorpSecurityGatewayApplication#hostname}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports"></a>

```csharp
public double[] Ports { get; set; }
```

- *Type:* double[]

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#ports GoogleBeyondcorpSecurityGatewayApplication#ports}

---

### GoogleBeyondcorpSecurityGatewayApplicationTimeouts <a name="GoogleBeyondcorpSecurityGatewayApplicationTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}.

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreams <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreams {
    GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy EgressPolicy = null,
    GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy">EgressPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | network block. |

---

##### `EgressPolicy`<sup>Optional</sup> <a name="EgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy EgressPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#egress_policy GoogleBeyondcorpSecurityGatewayApplication#egress_policy}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.network"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#network GoogleBeyondcorpSecurityGatewayApplication#network}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy {
    string[] Regions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions">Regions</a></code> | <code>string[]</code> | Required. List of regions where the application sends traffic to. |

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#regions GoogleBeyondcorpSecurityGatewayApplication#regions}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name">Name</a></code> | <code>string</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_beyondcorp_security_gateway_application#name GoogleBeyondcorpSecurityGatewayApplication#name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get"></a>

```csharp
private GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput">PortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```csharp
public double[] PortsInput { get; }
```

- *Type:* double[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get"></a>

```csharp
private GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy">PutEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy">ResetEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressPolicy` <a name="PutEgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```csharp
private void PutEgressPolicy(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork"></a>

```csharp
private void PutNetwork(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `ResetEgressPolicy` <a name="ResetEgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```csharp
private void ResetEgressPolicy()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy">EgressPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput">EgressPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressPolicy`<sup>Required</sup> <a name="EgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference EgressPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a>

---

##### `EgressPolicyInput`<sup>Optional</sup> <a name="EgressPolicyInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy EgressPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



