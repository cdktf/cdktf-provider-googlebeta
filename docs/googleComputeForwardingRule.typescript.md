# `googleComputeForwardingRule` Submodule <a name="`googleComputeForwardingRule` Submodule" id="@cdktf/provider-google-beta.googleComputeForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeForwardingRule <a name="GoogleComputeForwardingRule" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule google_compute_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

new googleComputeForwardingRule.GoogleComputeForwardingRule(scope: Construct, id: string, config: GoogleComputeForwardingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig">GoogleComputeForwardingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig">GoogleComputeForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putServiceDirectoryRegistrations">putServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowGlobalAccess">resetAllowGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowPscGlobalAccess">resetAllowPscGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllPorts">resetAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetBackendService">resetBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpCollection">resetIpCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIsMirroringCollector">resetIsMirroringCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNoAutomateDnsZone">resetNoAutomateDnsZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPortRange">resetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRecreateClosedPsc">resetRecreateClosedPsc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceDirectoryRegistrations">resetServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceLabel">resetServiceLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSourceIpRanges">resetSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServiceDirectoryRegistrations` <a name="putServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putServiceDirectoryRegistrations"></a>

```typescript
public putServiceDirectoryRegistrations(value: GoogleComputeForwardingRuleServiceDirectoryRegistrations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putServiceDirectoryRegistrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeForwardingRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a>

---

##### `resetAllowGlobalAccess` <a name="resetAllowGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowGlobalAccess"></a>

```typescript
public resetAllowGlobalAccess(): void
```

##### `resetAllowPscGlobalAccess` <a name="resetAllowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowPscGlobalAccess"></a>

```typescript
public resetAllowPscGlobalAccess(): void
```

##### `resetAllPorts` <a name="resetAllPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllPorts"></a>

```typescript
public resetAllPorts(): void
```

##### `resetBackendService` <a name="resetBackendService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetBackendService"></a>

```typescript
public resetBackendService(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpCollection` <a name="resetIpCollection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpCollection"></a>

```typescript
public resetIpCollection(): void
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpProtocol"></a>

```typescript
public resetIpProtocol(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetIsMirroringCollector` <a name="resetIsMirroringCollector" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIsMirroringCollector"></a>

```typescript
public resetIsMirroringCollector(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLoadBalancingScheme"></a>

```typescript
public resetLoadBalancingScheme(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetworkTier"></a>

```typescript
public resetNetworkTier(): void
```

##### `resetNoAutomateDnsZone` <a name="resetNoAutomateDnsZone" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNoAutomateDnsZone"></a>

```typescript
public resetNoAutomateDnsZone(): void
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPortRange"></a>

```typescript
public resetPortRange(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRecreateClosedPsc` <a name="resetRecreateClosedPsc" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRecreateClosedPsc"></a>

```typescript
public resetRecreateClosedPsc(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceDirectoryRegistrations` <a name="resetServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceDirectoryRegistrations"></a>

```typescript
public resetServiceDirectoryRegistrations(): void
```

##### `resetServiceLabel` <a name="resetServiceLabel" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceLabel"></a>

```typescript
public resetServiceLabel(): void
```

##### `resetSourceIpRanges` <a name="resetSourceIpRanges" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSourceIpRanges"></a>

```typescript
public resetSourceIpRanges(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeForwardingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.baseForwardingRule">baseForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forwardingRuleId">forwardingRuleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrations">serviceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference">GoogleComputeForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccessInput">allowGlobalAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowPscGlobalAccessInput">allowPscGlobalAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPortsInput">allPortsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendServiceInput">backendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipCollectionInput">ipCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollectorInput">isMirroringCollectorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTierInput">networkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.noAutomateDnsZoneInput">noAutomateDnsZoneInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRangeInput">portRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.recreateClosedPscInput">recreateClosedPscInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrationsInput">serviceDirectoryRegistrationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabelInput">serviceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.sourceIpRangesInput">sourceIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccess">allowGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPorts">allPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendService">backendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipCollection">ipCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollector">isMirroringCollector</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTier">networkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.noAutomateDnsZone">noAutomateDnsZone</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.recreateClosedPsc">recreateClosedPsc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabel">serviceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.sourceIpRanges">sourceIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseForwardingRule`<sup>Required</sup> <a name="baseForwardingRule" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.baseForwardingRule"></a>

```typescript
public readonly baseForwardingRule: string;
```

- *Type:* string

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `forwardingRuleId`<sup>Required</sup> <a name="forwardingRuleId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forwardingRuleId"></a>

```typescript
public readonly forwardingRuleId: number;
```

- *Type:* number

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionStatus"></a>

```typescript
public readonly pscConnectionStatus: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `serviceDirectoryRegistrations`<sup>Required</sup> <a name="serviceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrations"></a>

```typescript
public readonly serviceDirectoryRegistrations: GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeForwardingRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference">GoogleComputeForwardingRuleTimeoutsOutputReference</a>

---

##### `allowGlobalAccessInput`<sup>Optional</sup> <a name="allowGlobalAccessInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccessInput"></a>

```typescript
public readonly allowGlobalAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPscGlobalAccessInput`<sup>Optional</sup> <a name="allowPscGlobalAccessInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowPscGlobalAccessInput"></a>

```typescript
public readonly allowPscGlobalAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allPortsInput`<sup>Optional</sup> <a name="allPortsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPortsInput"></a>

```typescript
public readonly allPortsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendServiceInput`<sup>Optional</sup> <a name="backendServiceInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendServiceInput"></a>

```typescript
public readonly backendServiceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipCollectionInput`<sup>Optional</sup> <a name="ipCollectionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipCollectionInput"></a>

```typescript
public readonly ipCollectionInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `isMirroringCollectorInput`<sup>Optional</sup> <a name="isMirroringCollectorInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollectorInput"></a>

```typescript
public readonly isMirroringCollectorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTierInput"></a>

```typescript
public readonly networkTierInput: string;
```

- *Type:* string

---

##### `noAutomateDnsZoneInput`<sup>Optional</sup> <a name="noAutomateDnsZoneInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.noAutomateDnsZoneInput"></a>

```typescript
public readonly noAutomateDnsZoneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `recreateClosedPscInput`<sup>Optional</sup> <a name="recreateClosedPscInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.recreateClosedPscInput"></a>

```typescript
public readonly recreateClosedPscInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceDirectoryRegistrationsInput`<sup>Optional</sup> <a name="serviceDirectoryRegistrationsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrationsInput"></a>

```typescript
public readonly serviceDirectoryRegistrationsInput: GoogleComputeForwardingRuleServiceDirectoryRegistrations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `serviceLabelInput`<sup>Optional</sup> <a name="serviceLabelInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabelInput"></a>

```typescript
public readonly serviceLabelInput: string;
```

- *Type:* string

---

##### `sourceIpRangesInput`<sup>Optional</sup> <a name="sourceIpRangesInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.sourceIpRangesInput"></a>

```typescript
public readonly sourceIpRangesInput: string[];
```

- *Type:* string[]

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeForwardingRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a>

---

##### `allowGlobalAccess`<sup>Required</sup> <a name="allowGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccess"></a>

```typescript
public readonly allowGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPscGlobalAccess`<sup>Required</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowPscGlobalAccess"></a>

```typescript
public readonly allowPscGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allPorts`<sup>Required</sup> <a name="allPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPorts"></a>

```typescript
public readonly allPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipCollection`<sup>Required</sup> <a name="ipCollection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipCollection"></a>

```typescript
public readonly ipCollection: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `isMirroringCollector`<sup>Required</sup> <a name="isMirroringCollector" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollector"></a>

```typescript
public readonly isMirroringCollector: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

---

##### `noAutomateDnsZone`<sup>Required</sup> <a name="noAutomateDnsZone" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.noAutomateDnsZone"></a>

```typescript
public readonly noAutomateDnsZone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `recreateClosedPsc`<sup>Required</sup> <a name="recreateClosedPsc" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.recreateClosedPsc"></a>

```typescript
public readonly recreateClosedPsc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceLabel`<sup>Required</sup> <a name="serviceLabel" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabel"></a>

```typescript
public readonly serviceLabel: string;
```

- *Type:* string

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: string[];
```

- *Type:* string[]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeForwardingRuleConfig <a name="GoogleComputeForwardingRuleConfig" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.Initializer"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

const googleComputeForwardingRuleConfig: googleComputeForwardingRule.GoogleComputeForwardingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowGlobalAccess">allowGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allPorts">allPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.backendService">backendService</a></code> | <code>string</code> | Identifies the backend service to which the forwarding rule sends traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#id GoogleComputeForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipCollection">ipCollection</a></code> | <code>string</code> | Resource reference of a PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.isMirroringCollector">isMirroringCollector</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not this load balancer can be used as a collector for packet mirroring. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.network">network</a></code> | <code>string</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.networkTier">networkTier</a></code> | <code>string</code> | This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.noAutomateDnsZone">noAutomateDnsZone</a></code> | <code>boolean \| cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.portRange">portRange</a></code> | <code>string</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ports">ports</a></code> | <code>string[]</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#project GoogleComputeForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.recreateClosedPsc">recreateClosedPsc</a></code> | <code>boolean \| cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.region">region</a></code> | <code>string</code> | A reference to the region where the regional forwarding rule resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceDirectoryRegistrations">serviceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a></code> | service_directory_registrations block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceLabel">serviceLabel</a></code> | <code>string</code> | An optional prefix to the service name for this Forwarding Rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.sourceIpRanges">sourceIpRanges</a></code> | <code>string[]</code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.target">target</a></code> | <code>string</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#name GoogleComputeForwardingRule#name}

---

##### `allowGlobalAccess`<sup>Optional</sup> <a name="allowGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowGlobalAccess"></a>

```typescript
public readonly allowGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance.

If the field is set to 'TRUE', clients can access ILB from all
regions.

Otherwise only allows access from clients in the same region as the
internal load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#allow_global_access GoogleComputeForwardingRule#allow_global_access}

---

##### `allowPscGlobalAccess`<sup>Optional</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowPscGlobalAccess"></a>

```typescript
public readonly allowPscGlobalAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#allow_psc_global_access GoogleComputeForwardingRule#allow_psc_global_access}

---

##### `allPorts`<sup>Optional</sup> <a name="allPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allPorts"></a>

```typescript
public readonly allPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'allPorts' field has the following limitations:
* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, SCTP, or
L3_DEFAULT.
* It's applicable only to the following products: internal passthrough
Network Load Balancers, backend service-based external passthrough Network
Load Balancers, and internal and external protocol forwarding.
* Set this field to true to allow packets addressed to any port or packets
lacking destination port information (for example, UDP fragments after the
first fragment) to be forwarded to the backends configured with this
forwarding rule. The L3_DEFAULT protocol requires 'allPorts' be set to
true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#all_ports GoogleComputeForwardingRule#all_ports}

---

##### `backendService`<sup>Optional</sup> <a name="backendService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

Identifies the backend service to which the forwarding rule sends traffic.

Required for Internal TCP/UDP Load Balancing and Network Load Balancing;
must be omitted for all other load balancer types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#backend_service GoogleComputeForwardingRule#backend_service}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#description GoogleComputeForwardingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#id GoogleComputeForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target' or 'backendService'.

While creating a forwarding rule, specifying an 'IPAddress' is
required under the following circumstances:

* When the 'target' is set to 'targetGrpcProxy' and
'validateForProxyless' is set to 'true', the
'IPAddress' should be set to '0.0.0.0'.
* When the 'target' is a Private Service Connect Google APIs
bundle, you must specify an 'IPAddress'.

Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.

Use one of the following formats to specify an IP address while creating a
forwarding rule:

* IP address number, as in '100.1.2.3'
* IPv6 address range, as in '2600:1234::/96'
* Full resource URL, as in
'https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name'
* Partial URL or by name, as in:
  * 'projects/project_id/regions/region/addresses/address-name'
  * 'regions/region/addresses/address-name'
  * 'global/addresses/address-name'
  * 'address-name'

The forwarding rule's 'target' or 'backendService',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#ip_address GoogleComputeForwardingRule#ip_address}

---

##### `ipCollection`<sup>Optional</sup> <a name="ipCollection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipCollection"></a>

```typescript
public readonly ipCollection: string;
```

- *Type:* string

Resource reference of a PublicDelegatedPrefix.

The PDP must be a sub-PDP
in EXTERNAL_IPV6_FORWARDING_RULE_CREATION mode.
Use one of the following formats to specify a sub-PDP when creating an
IPv6 NetLB forwarding rule using BYOIP:
Full resource URL, as in:
  * 'https://www.googleapis.com/compute/v1/projects/{{projectId}}/regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'
Partial URL, as in:
  * 'projects/{{projectId}}/regions/region/publicDelegatedPrefixes/{{sub-pdp-name}}'
  * 'regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#ip_collection GoogleComputeForwardingRule#ip_collection}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).

A Forwarding Rule with protocol L3_DEFAULT can attach with target instance or
backend service with UNSPECIFIED protocol.
A forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP", "L3_DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#ip_protocol GoogleComputeForwardingRule#ip_protocol}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6.

If not set, the IPv4 address will be used by default. Possible values: ["IPV4", "IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#ip_version GoogleComputeForwardingRule#ip_version}

---

##### `isMirroringCollector`<sup>Optional</sup> <a name="isMirroringCollector" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.isMirroringCollector"></a>

```typescript
public readonly isMirroringCollector: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not this load balancer can be used as a collector for packet mirroring.

To prevent mirroring loops, instances behind this
load balancer will not have their traffic mirrored even if a
'PacketMirroring' rule applies to them.

This can only be set to true for load balancers that have their
'loadBalancingScheme' set to 'INTERNAL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#is_mirroring_collector GoogleComputeForwardingRule#is_mirroring_collector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this forwarding rule.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#labels GoogleComputeForwardingRule#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

Specifies the forwarding rule type.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#load_balancing_scheme GoogleComputeForwardingRule#load_balancing_scheme}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#network GoogleComputeForwardingRule#network}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'.

For regional ForwardingRule, the valid values are 'PREMIUM' and
'STANDARD'. For GlobalForwardingRule, the valid value is
'PREMIUM'.

If this field is not specified, it is assumed to be 'PREMIUM'.
If 'IPAddress' is specified, this value must be equal to the
networkTier of the Address. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#network_tier GoogleComputeForwardingRule#network_tier}

---

##### `noAutomateDnsZone`<sup>Optional</sup> <a name="noAutomateDnsZone" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.noAutomateDnsZone"></a>

```typescript
public readonly noAutomateDnsZone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not.

Non-PSC forwarding rules do not use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#no_automate_dns_zone GoogleComputeForwardingRule#no_automate_dns_zone}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'portRange' field has the following limitations:
* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
and
* It's applicable only to the following products: external passthrough
Network Load Balancers, internal and external proxy Network Load
Balancers, internal and external Application Load Balancers, external
protocol forwarding, and Classic VPN.
* Some products have restrictions on what ports can be used. See
[port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
for details.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair, and cannot have overlapping
'portRange's.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair, and
cannot have overlapping 'portRange's.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'ports' field has the following limitations:
* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
and
* It's applicable only to the following products: internal passthrough
Network Load Balancers, backend service-based external passthrough Network
Load Balancers, and internal protocol forwarding.
* You can specify a list of up to five ports by number, separated by
commas. The ports can be contiguous or discontiguous.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair if they share at least one port
number.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair if
they share at least one port number.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#project GoogleComputeForwardingRule#project}.

---

##### `recreateClosedPsc`<sup>Optional</sup> <a name="recreateClosedPsc" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.recreateClosedPsc"></a>

```typescript
public readonly recreateClosedPsc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#recreate_closed_psc GoogleComputeForwardingRule#recreate_closed_psc}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region where the regional forwarding rule resides.

This field is not applicable to global forwarding rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#region GoogleComputeForwardingRule#region}

---

##### `serviceDirectoryRegistrations`<sup>Optional</sup> <a name="serviceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceDirectoryRegistrations"></a>

```typescript
public readonly serviceDirectoryRegistrations: GoogleComputeForwardingRuleServiceDirectoryRegistrations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a>

service_directory_registrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#service_directory_registrations GoogleComputeForwardingRule#service_directory_registrations}

---

##### `serviceLabel`<sup>Optional</sup> <a name="serviceLabel" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceLabel"></a>

```typescript
public readonly serviceLabel: string;
```

- *Type:* string

An optional prefix to the service name for this Forwarding Rule.

If specified, will be the first label of the fully qualified service
name.

The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

This field is only used for INTERNAL load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#service_label GoogleComputeForwardingRule#service_label}

---

##### `sourceIpRanges`<sup>Optional</sup> <a name="sourceIpRanges" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: string[];
```

- *Type:* string[]

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#source_ip_ranges GoogleComputeForwardingRule#source_ip_ranges}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6.

If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#subnetwork GoogleComputeForwardingRule#subnetwork}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The URL of the target resource to receive the matched traffic.

For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.

The forwarded traffic must be of a type appropriate to the target object.
*  For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
*  For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
  *  'vpc-sc' - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
  *  'all-apis' - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).

For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#target GoogleComputeForwardingRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeForwardingRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#timeouts GoogleComputeForwardingRule#timeouts}

---

### GoogleComputeForwardingRuleServiceDirectoryRegistrations <a name="GoogleComputeForwardingRuleServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.Initializer"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

const googleComputeForwardingRuleServiceDirectoryRegistrations: googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.namespace">namespace</a></code> | <code>string</code> | Service Directory namespace to register the forwarding rule under. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.service">service</a></code> | <code>string</code> | Service Directory service to register the forwarding rule under. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Service Directory namespace to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#namespace GoogleComputeForwardingRule#namespace}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service Directory service to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#service GoogleComputeForwardingRule#service}

---

### GoogleComputeForwardingRuleTimeouts <a name="GoogleComputeForwardingRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.Initializer"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

const googleComputeForwardingRuleTimeouts: googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#create GoogleComputeForwardingRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#delete GoogleComputeForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#update GoogleComputeForwardingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#create GoogleComputeForwardingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#delete GoogleComputeForwardingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_forwarding_rule#update GoogleComputeForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference <a name="GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

new googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeForwardingRuleServiceDirectoryRegistrations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a>

---


### GoogleComputeForwardingRuleTimeoutsOutputReference <a name="GoogleComputeForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeForwardingRule } from '@cdktf/provider-google-beta'

new googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeForwardingRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a>

---



