# `google_network_connectivity_spoke`

Refer to the Terraform Registory for docs: [`google_network_connectivity_spoke`](https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke).

# `googleNetworkConnectivitySpoke` Submodule <a name="`googleNetworkConnectivitySpoke` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivitySpoke <a name="GoogleNetworkConnectivitySpoke" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke google_network_connectivity_spoke}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

new googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke(scope: Construct, id: string, config: GoogleNetworkConnectivitySpokeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig">GoogleNetworkConnectivitySpokeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig">GoogleNetworkConnectivitySpokeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments">putLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances">putLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels">putLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedInterconnectAttachments">resetLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedRouterApplianceInstances">resetLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedVpnTunnels">resetLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLinkedInterconnectAttachments` <a name="putLinkedInterconnectAttachments" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments"></a>

```typescript
public putLinkedInterconnectAttachments(value: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `putLinkedRouterApplianceInstances` <a name="putLinkedRouterApplianceInstances" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances"></a>

```typescript
public putLinkedRouterApplianceInstances(value: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `putLinkedVpnTunnels` <a name="putLinkedVpnTunnels" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels"></a>

```typescript
public putLinkedVpnTunnels(value: GoogleNetworkConnectivitySpokeLinkedVpnTunnels): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkConnectivitySpokeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLinkedInterconnectAttachments` <a name="resetLinkedInterconnectAttachments" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedInterconnectAttachments"></a>

```typescript
public resetLinkedInterconnectAttachments(): void
```

##### `resetLinkedRouterApplianceInstances` <a name="resetLinkedRouterApplianceInstances" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedRouterApplianceInstances"></a>

```typescript
public resetLinkedRouterApplianceInstances(): void
```

##### `resetLinkedVpnTunnels` <a name="resetLinkedVpnTunnels" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetLinkedVpnTunnels"></a>

```typescript
public resetLinkedVpnTunnels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isConstruct"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformElement"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformResource"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedInterconnectAttachments">linkedInterconnectAttachments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedRouterApplianceInstances">linkedRouterApplianceInstances</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpnTunnels">linkedVpnTunnels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference">GoogleNetworkConnectivitySpokeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.hubInput">hubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput">linkedInterconnectAttachmentsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput">linkedRouterApplianceInstancesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpnTunnelsInput">linkedVpnTunnelsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.hub">hub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `linkedInterconnectAttachments`<sup>Required</sup> <a name="linkedInterconnectAttachments" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedInterconnectAttachments"></a>

```typescript
public readonly linkedInterconnectAttachments: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a>

---

##### `linkedRouterApplianceInstances`<sup>Required</sup> <a name="linkedRouterApplianceInstances" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedRouterApplianceInstances"></a>

```typescript
public readonly linkedRouterApplianceInstances: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a>

---

##### `linkedVpnTunnels`<sup>Required</sup> <a name="linkedVpnTunnels" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpnTunnels"></a>

```typescript
public readonly linkedVpnTunnels: GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkConnectivitySpokeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference">GoogleNetworkConnectivitySpokeTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hubInput`<sup>Optional</sup> <a name="hubInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.hubInput"></a>

```typescript
public readonly hubInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `linkedInterconnectAttachmentsInput`<sup>Optional</sup> <a name="linkedInterconnectAttachmentsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput"></a>

```typescript
public readonly linkedInterconnectAttachmentsInput: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `linkedRouterApplianceInstancesInput`<sup>Optional</sup> <a name="linkedRouterApplianceInstancesInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput"></a>

```typescript
public readonly linkedRouterApplianceInstancesInput: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `linkedVpnTunnelsInput`<sup>Optional</sup> <a name="linkedVpnTunnelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.linkedVpnTunnelsInput"></a>

```typescript
public readonly linkedVpnTunnelsInput: GoogleNetworkConnectivitySpokeLinkedVpnTunnels;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkConnectivitySpokeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.hub"></a>

```typescript
public readonly hub: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpoke.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivitySpokeConfig <a name="GoogleNetworkConnectivitySpokeConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

const googleNetworkConnectivitySpokeConfig: googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.hub">hub</a></code> | <code>string</code> | Immutable. The URI of the hub that this spoke is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.name">name</a></code> | <code>string</code> | Immutable. The name of the spoke. Spoke names must be unique. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.description">description</a></code> | <code>string</code> | An optional description of the spoke. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#id GoogleNetworkConnectivitySpoke#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments">linkedInterconnectAttachments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | linked_interconnect_attachments block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances">linkedRouterApplianceInstances</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | linked_router_appliance_instances block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedVpnTunnels">linkedVpnTunnels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a></code> | linked_vpn_tunnels block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.hub"></a>

```typescript
public readonly hub: string;
```

- *Type:* string

Immutable. The URI of the hub that this spoke is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#hub GoogleNetworkConnectivitySpoke#hub}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#location GoogleNetworkConnectivitySpoke#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable. The name of the spoke. Spoke names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#name GoogleNetworkConnectivitySpoke#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#description GoogleNetworkConnectivitySpoke#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#id GoogleNetworkConnectivitySpoke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#labels GoogleNetworkConnectivitySpoke#labels}

---

##### `linkedInterconnectAttachments`<sup>Optional</sup> <a name="linkedInterconnectAttachments" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments"></a>

```typescript
public readonly linkedInterconnectAttachments: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a>

linked_interconnect_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#linked_interconnect_attachments GoogleNetworkConnectivitySpoke#linked_interconnect_attachments}

---

##### `linkedRouterApplianceInstances`<sup>Optional</sup> <a name="linkedRouterApplianceInstances" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances"></a>

```typescript
public readonly linkedRouterApplianceInstances: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

linked_router_appliance_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#linked_router_appliance_instances GoogleNetworkConnectivitySpoke#linked_router_appliance_instances}

---

##### `linkedVpnTunnels`<sup>Optional</sup> <a name="linkedVpnTunnels" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.linkedVpnTunnels"></a>

```typescript
public readonly linkedVpnTunnels: GoogleNetworkConnectivitySpokeLinkedVpnTunnels;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a>

linked_vpn_tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#linked_vpn_tunnels GoogleNetworkConnectivitySpoke#linked_vpn_tunnels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#project GoogleNetworkConnectivitySpoke#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkConnectivitySpokeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#timeouts GoogleNetworkConnectivitySpoke#timeouts}

---

### GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments <a name="GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

const googleNetworkConnectivitySpokeLinkedInterconnectAttachments: googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris">uris</a></code> | <code>string[]</code> | The URIs of linked interconnect attachment resources. |

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#site_to_site_data_transfer GoogleNetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

The URIs of linked interconnect attachment resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#uris GoogleNetworkConnectivitySpoke#uris}

---

### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

const googleNetworkConnectivitySpokeLinkedRouterApplianceInstances: googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances">instances</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]</code> | instances block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances"></a>

```typescript
public readonly instances: IResolvable | GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#instances GoogleNetworkConnectivitySpoke#instances}

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#site_to_site_data_transfer GoogleNetworkConnectivitySpoke#site_to_site_data_transfer}

---

### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

const googleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances: googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress">ipAddress</a></code> | <code>string</code> | The IP address on the VM to use for peering. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine">virtualMachine</a></code> | <code>string</code> | The URI of the virtual machine resource. |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The IP address on the VM to use for peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#ip_address GoogleNetworkConnectivitySpoke#ip_address}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: string;
```

- *Type:* string

The URI of the virtual machine resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#virtual_machine GoogleNetworkConnectivitySpoke#virtual_machine}

---

### GoogleNetworkConnectivitySpokeLinkedVpnTunnels <a name="GoogleNetworkConnectivitySpokeLinkedVpnTunnels" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

const googleNetworkConnectivitySpokeLinkedVpnTunnels: googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.uris">uris</a></code> | <code>string[]</code> | The URIs of linked VPN tunnel resources. |

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#site_to_site_data_transfer GoogleNetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

The URIs of linked VPN tunnel resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#uris GoogleNetworkConnectivitySpoke#uris}

---

### GoogleNetworkConnectivitySpokeTimeouts <a name="GoogleNetworkConnectivitySpokeTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

const googleNetworkConnectivitySpokeTimeouts: googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#create GoogleNetworkConnectivitySpoke#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#delete GoogleNetworkConnectivitySpoke#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#update GoogleNetworkConnectivitySpoke#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#create GoogleNetworkConnectivitySpoke#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#delete GoogleNetworkConnectivitySpoke#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_network_connectivity_spoke#update GoogleNetworkConnectivitySpoke#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

new googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput">siteToSiteDataTransferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput">urisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris">uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `siteToSiteDataTransferInput`<sup>Optional</sup> <a name="siteToSiteDataTransferInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput"></a>

```typescript
public readonly siteToSiteDataTransferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput"></a>

```typescript
public readonly urisInput: string[];
```

- *Type:* string[]

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments">GoogleNetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---


### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

new googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get"></a>

```typescript
public get(index: number): GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]

---


### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

new googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetVirtualMachine">resetVirtualMachine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetVirtualMachine` <a name="resetVirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetVirtualMachine"></a>

```typescript
public resetVirtualMachine(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput">virtualMachineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine">virtualMachine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `virtualMachineInput`<sup>Optional</sup> <a name="virtualMachineInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput"></a>

```typescript
public readonly virtualMachineInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine"></a>

```typescript
public readonly virtualMachine: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>

---


### GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

new googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances">putInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstances` <a name="putInstances" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances"></a>

```typescript
public putInstances(value: IResolvable | GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput">instancesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput">siteToSiteDataTransferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances"></a>

```typescript
public readonly instances: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a>

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: IResolvable | GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>[]

---

##### `siteToSiteDataTransferInput`<sup>Optional</sup> <a name="siteToSiteDataTransferInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput"></a>

```typescript
public readonly siteToSiteDataTransferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances">GoogleNetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---


### GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference <a name="GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

new googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput">siteToSiteDataTransferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput">urisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris">uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `siteToSiteDataTransferInput`<sup>Optional</sup> <a name="siteToSiteDataTransferInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput"></a>

```typescript
public readonly siteToSiteDataTransferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput"></a>

```typescript
public readonly urisInput: string[];
```

- *Type:* string[]

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer"></a>

```typescript
public readonly siteToSiteDataTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkConnectivitySpokeLinkedVpnTunnels;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeLinkedVpnTunnels">GoogleNetworkConnectivitySpokeLinkedVpnTunnels</a>

---


### GoogleNetworkConnectivitySpokeTimeoutsOutputReference <a name="GoogleNetworkConnectivitySpokeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivitySpoke } from '@cdktf/provider-google-beta'

new googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkConnectivitySpokeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkConnectivitySpoke.GoogleNetworkConnectivitySpokeTimeouts">GoogleNetworkConnectivitySpokeTimeouts</a>

---



