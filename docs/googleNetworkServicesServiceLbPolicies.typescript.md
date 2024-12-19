# `googleNetworkServicesServiceLbPolicies` Submodule <a name="`googleNetworkServicesServiceLbPolicies` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesServiceLbPolicies <a name="GoogleNetworkServicesServiceLbPolicies" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies google_network_services_service_lb_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

new googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies(scope: Construct, id: string, config: GoogleNetworkServicesServiceLbPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig">GoogleNetworkServicesServiceLbPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig">GoogleNetworkServicesServiceLbPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putAutoCapacityDrain">putAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putFailoverConfig">putFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetAutoCapacityDrain">resetAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetFailoverConfig">resetFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm">resetLoadBalancingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoCapacityDrain` <a name="putAutoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putAutoCapacityDrain"></a>

```typescript
public putAutoCapacityDrain(value: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putAutoCapacityDrain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `putFailoverConfig` <a name="putFailoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putFailoverConfig"></a>

```typescript
public putFailoverConfig(value: GoogleNetworkServicesServiceLbPoliciesFailoverConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesServiceLbPoliciesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `resetAutoCapacityDrain` <a name="resetAutoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetAutoCapacityDrain"></a>

```typescript
public resetAutoCapacityDrain(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFailoverConfig` <a name="resetFailoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetFailoverConfig"></a>

```typescript
public resetFailoverConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoadBalancingAlgorithm` <a name="resetLoadBalancingAlgorithm" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm"></a>

```typescript
public resetLoadBalancingAlgorithm(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesServiceLbPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkServicesServiceLbPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesServiceLbPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesServiceLbPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesServiceLbPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrain">autoCapacityDrain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfig">failoverConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference">GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference">GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrainInput">autoCapacityDrainInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfigInput">failoverConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput">loadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm">loadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoCapacityDrain`<sup>Required</sup> <a name="autoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrain"></a>

```typescript
public readonly autoCapacityDrain: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `failoverConfig`<sup>Required</sup> <a name="failoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfig"></a>

```typescript
public readonly failoverConfig: GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference">GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference">GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `autoCapacityDrainInput`<sup>Optional</sup> <a name="autoCapacityDrainInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrainInput"></a>

```typescript
public readonly autoCapacityDrainInput: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `failoverConfigInput`<sup>Optional</sup> <a name="failoverConfigInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfigInput"></a>

```typescript
public readonly failoverConfigInput: GoogleNetworkServicesServiceLbPoliciesFailoverConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingAlgorithmInput`<sup>Optional</sup> <a name="loadBalancingAlgorithmInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput"></a>

```typescript
public readonly loadBalancingAlgorithmInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesServiceLbPoliciesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingAlgorithm`<sup>Required</sup> <a name="loadBalancingAlgorithm" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm"></a>

```typescript
public readonly loadBalancingAlgorithm: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain <a name="GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain.Initializer"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

const googleNetworkServicesServiceLbPoliciesAutoCapacityDrain: googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#enable GoogleNetworkServicesServiceLbPolicies#enable}

---

### GoogleNetworkServicesServiceLbPoliciesConfig <a name="GoogleNetworkServicesServiceLbPoliciesConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.Initializer"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

const googleNetworkServicesServiceLbPoliciesConfig: googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.location">location</a></code> | <code>string</code> | The location of the service lb policy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.name">name</a></code> | <code>string</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain">autoCapacityDrain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.failoverConfig">failoverConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#id GoogleNetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm">loadBalancingAlgorithm</a></code> | <code>string</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#project GoogleNetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#location GoogleNetworkServicesServiceLbPolicies#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#name GoogleNetworkServicesServiceLbPolicies#name}

---

##### `autoCapacityDrain`<sup>Optional</sup> <a name="autoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain"></a>

```typescript
public readonly autoCapacityDrain: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#auto_capacity_drain GoogleNetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#description GoogleNetworkServicesServiceLbPolicies#description}

---

##### `failoverConfig`<sup>Optional</sup> <a name="failoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.failoverConfig"></a>

```typescript
public readonly failoverConfig: GoogleNetworkServicesServiceLbPoliciesFailoverConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#failover_config GoogleNetworkServicesServiceLbPolicies#failover_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#id GoogleNetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#labels GoogleNetworkServicesServiceLbPolicies#labels}

---

##### `loadBalancingAlgorithm`<sup>Optional</sup> <a name="loadBalancingAlgorithm" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm"></a>

```typescript
public readonly loadBalancingAlgorithm: string;
```

- *Type:* string

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#load_balancing_algorithm GoogleNetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#project GoogleNetworkServicesServiceLbPolicies#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesServiceLbPoliciesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#timeouts GoogleNetworkServicesServiceLbPolicies#timeouts}

---

### GoogleNetworkServicesServiceLbPoliciesFailoverConfig <a name="GoogleNetworkServicesServiceLbPoliciesFailoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig.Initializer"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

const googleNetworkServicesServiceLbPoliciesFailoverConfig: googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold">failoverHealthThreshold</a></code> | <code>number</code> | Optional. |

---

##### `failoverHealthThreshold`<sup>Required</sup> <a name="failoverHealthThreshold" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold"></a>

```typescript
public readonly failoverHealthThreshold: number;
```

- *Type:* number

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#failover_health_threshold GoogleNetworkServicesServiceLbPolicies#failover_health_threshold}

---

### GoogleNetworkServicesServiceLbPoliciesTimeouts <a name="GoogleNetworkServicesServiceLbPoliciesTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

const googleNetworkServicesServiceLbPoliciesTimeouts: googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#create GoogleNetworkServicesServiceLbPolicies#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#delete GoogleNetworkServicesServiceLbPolicies#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#update GoogleNetworkServicesServiceLbPolicies#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#create GoogleNetworkServicesServiceLbPolicies#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#delete GoogleNetworkServicesServiceLbPolicies#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_service_lb_policies#update GoogleNetworkServicesServiceLbPolicies#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

new googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---


### GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

new googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput">failoverHealthThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold">failoverHealthThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failoverHealthThresholdInput`<sup>Optional</sup> <a name="failoverHealthThresholdInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput"></a>

```typescript
public readonly failoverHealthThresholdInput: number;
```

- *Type:* number

---

##### `failoverHealthThreshold`<sup>Required</sup> <a name="failoverHealthThreshold" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold"></a>

```typescript
public readonly failoverHealthThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesServiceLbPoliciesFailoverConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

---


### GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesServiceLbPolicies } from '@cdktf/provider-google-beta'

new googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesServiceLbPoliciesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

---



