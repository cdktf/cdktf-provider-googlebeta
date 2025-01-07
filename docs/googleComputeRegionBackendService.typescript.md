# `googleComputeRegionBackendService` Submodule <a name="`googleComputeRegionBackendService` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionBackendService <a name="GoogleComputeRegionBackendService" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service google_compute_region_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendService(scope: Construct, id: string, config: GoogleComputeRegionBackendServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig">GoogleComputeRegionBackendServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig">GoogleComputeRegionBackendServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putBackend">putBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCircuitBreakers">putCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConnectionTrackingPolicy">putConnectionTrackingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConsistentHash">putConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putFailoverPolicy">putFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putIap">putIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putOutlierDetection">putOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putStrongSessionAffinityCookie">putStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putSubsetting">putSubsetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetAffinityCookieTtlSec">resetAffinityCookieTtlSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCircuitBreakers">resetCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionDrainingTimeoutSec">resetConnectionDrainingTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionTrackingPolicy">resetConnectionTrackingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConsistentHash">resetConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetEnableCdn">resetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetFailoverPolicy">resetFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetHealthChecks">resetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIap">resetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIpAddressSelectionPolicy">resetIpAddressSelectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLocalityLbPolicy">resetLocalityLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOutlierDetection">resetOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetStrongSessionAffinityCookie">resetStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSubsetting">resetSubsetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackend` <a name="putBackend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putBackend"></a>

```typescript
public putBackend(value: IResolvable | GoogleComputeRegionBackendServiceBackend[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putBackend.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>[]

---

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCdnPolicy"></a>

```typescript
public putCdnPolicy(value: GoogleComputeRegionBackendServiceCdnPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

---

##### `putCircuitBreakers` <a name="putCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCircuitBreakers"></a>

```typescript
public putCircuitBreakers(value: GoogleComputeRegionBackendServiceCircuitBreakers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCircuitBreakers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

---

##### `putConnectionTrackingPolicy` <a name="putConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConnectionTrackingPolicy"></a>

```typescript
public putConnectionTrackingPolicy(value: GoogleComputeRegionBackendServiceConnectionTrackingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConnectionTrackingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---

##### `putConsistentHash` <a name="putConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConsistentHash"></a>

```typescript
public putConsistentHash(value: GoogleComputeRegionBackendServiceConsistentHash): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConsistentHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

---

##### `putFailoverPolicy` <a name="putFailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putFailoverPolicy"></a>

```typescript
public putFailoverPolicy(value: GoogleComputeRegionBackendServiceFailoverPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

---

##### `putIap` <a name="putIap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putIap"></a>

```typescript
public putIap(value: GoogleComputeRegionBackendServiceIap): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putLogConfig"></a>

```typescript
public putLogConfig(value: GoogleComputeRegionBackendServiceLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

---

##### `putOutlierDetection` <a name="putOutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putOutlierDetection"></a>

```typescript
public putOutlierDetection(value: GoogleComputeRegionBackendServiceOutlierDetection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putOutlierDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

---

##### `putStrongSessionAffinityCookie` <a name="putStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putStrongSessionAffinityCookie"></a>

```typescript
public putStrongSessionAffinityCookie(value: GoogleComputeRegionBackendServiceStrongSessionAffinityCookie): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putStrongSessionAffinityCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---

##### `putSubsetting` <a name="putSubsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putSubsetting"></a>

```typescript
public putSubsetting(value: GoogleComputeRegionBackendServiceSubsetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putSubsetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionBackendServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

---

##### `resetAffinityCookieTtlSec` <a name="resetAffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetAffinityCookieTtlSec"></a>

```typescript
public resetAffinityCookieTtlSec(): void
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCdnPolicy"></a>

```typescript
public resetCdnPolicy(): void
```

##### `resetCircuitBreakers` <a name="resetCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCircuitBreakers"></a>

```typescript
public resetCircuitBreakers(): void
```

##### `resetConnectionDrainingTimeoutSec` <a name="resetConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionDrainingTimeoutSec"></a>

```typescript
public resetConnectionDrainingTimeoutSec(): void
```

##### `resetConnectionTrackingPolicy` <a name="resetConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionTrackingPolicy"></a>

```typescript
public resetConnectionTrackingPolicy(): void
```

##### `resetConsistentHash` <a name="resetConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConsistentHash"></a>

```typescript
public resetConsistentHash(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableCdn` <a name="resetEnableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetEnableCdn"></a>

```typescript
public resetEnableCdn(): void
```

##### `resetFailoverPolicy` <a name="resetFailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetFailoverPolicy"></a>

```typescript
public resetFailoverPolicy(): void
```

##### `resetHealthChecks` <a name="resetHealthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetHealthChecks"></a>

```typescript
public resetHealthChecks(): void
```

##### `resetIap` <a name="resetIap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIap"></a>

```typescript
public resetIap(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressSelectionPolicy` <a name="resetIpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIpAddressSelectionPolicy"></a>

```typescript
public resetIpAddressSelectionPolicy(): void
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLoadBalancingScheme"></a>

```typescript
public resetLoadBalancingScheme(): void
```

##### `resetLocalityLbPolicy` <a name="resetLocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLocalityLbPolicy"></a>

```typescript
public resetLocalityLbPolicy(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetOutlierDetection` <a name="resetOutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOutlierDetection"></a>

```typescript
public resetOutlierDetection(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSessionAffinity"></a>

```typescript
public resetSessionAffinity(): void
```

##### `resetStrongSessionAffinityCookie` <a name="resetStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetStrongSessionAffinityCookie"></a>

```typescript
public resetStrongSessionAffinityCookie(): void
```

##### `resetSubsetting` <a name="resetSubsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSubsetting"></a>

```typescript
public resetSubsetting(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeoutSec"></a>

```typescript
public resetTimeoutSec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionBackendService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList">GoogleComputeRegionBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicy">connectionTrackingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference">GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference">GoogleComputeRegionBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicy">failoverPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference">GoogleComputeRegionBackendServiceFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.generatedId">generatedId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference">GoogleComputeRegionBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference">GoogleComputeRegionBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsetting">subsetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference">GoogleComputeRegionBackendServiceSubsettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference">GoogleComputeRegionBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSecInput">affinityCookieTtlSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backendInput">backendInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakersInput">circuitBreakersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSecInput">connectionDrainingTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicyInput">connectionTrackingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHashInput">consistentHashInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdnInput">enableCdnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicyInput">failoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecksInput">healthChecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iapInput">iapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicyInput">ipAddressSelectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicyInput">localityLbPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetectionInput">outlierDetectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookieInput">strongSessionAffinityCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsettingInput">subsettingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSecInput">timeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdn">enableCdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecks">healthChecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicy">localityLbPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backend"></a>

```typescript
public readonly backend: GoogleComputeRegionBackendServiceBackendList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList">GoogleComputeRegionBackendServiceBackendList</a>

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: GoogleComputeRegionBackendServiceCdnPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyOutputReference</a>

---

##### `circuitBreakers`<sup>Required</sup> <a name="circuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakers"></a>

```typescript
public readonly circuitBreakers: GoogleComputeRegionBackendServiceCircuitBreakersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersOutputReference</a>

---

##### `connectionTrackingPolicy`<sup>Required</sup> <a name="connectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicy"></a>

```typescript
public readonly connectionTrackingPolicy: GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference">GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference</a>

---

##### `consistentHash`<sup>Required</sup> <a name="consistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHash"></a>

```typescript
public readonly consistentHash: GoogleComputeRegionBackendServiceConsistentHashOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference">GoogleComputeRegionBackendServiceConsistentHashOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `failoverPolicy`<sup>Required</sup> <a name="failoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicy"></a>

```typescript
public readonly failoverPolicy: GoogleComputeRegionBackendServiceFailoverPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference">GoogleComputeRegionBackendServiceFailoverPolicyOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `generatedId`<sup>Required</sup> <a name="generatedId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.generatedId"></a>

```typescript
public readonly generatedId: number;
```

- *Type:* number

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iap"></a>

```typescript
public readonly iap: GoogleComputeRegionBackendServiceIapOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference">GoogleComputeRegionBackendServiceIapOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleComputeRegionBackendServiceLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference">GoogleComputeRegionBackendServiceLogConfigOutputReference</a>

---

##### `outlierDetection`<sup>Required</sup> <a name="outlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetection"></a>

```typescript
public readonly outlierDetection: GoogleComputeRegionBackendServiceOutlierDetectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `strongSessionAffinityCookie`<sup>Required</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookie"></a>

```typescript
public readonly strongSessionAffinityCookie: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference</a>

---

##### `subsetting`<sup>Required</sup> <a name="subsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsetting"></a>

```typescript
public readonly subsetting: GoogleComputeRegionBackendServiceSubsettingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference">GoogleComputeRegionBackendServiceSubsettingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionBackendServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference">GoogleComputeRegionBackendServiceTimeoutsOutputReference</a>

---

##### `affinityCookieTtlSecInput`<sup>Optional</sup> <a name="affinityCookieTtlSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSecInput"></a>

```typescript
public readonly affinityCookieTtlSecInput: number;
```

- *Type:* number

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backendInput"></a>

```typescript
public readonly backendInput: IResolvable | GoogleComputeRegionBackendServiceBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>[]

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicyInput"></a>

```typescript
public readonly cdnPolicyInput: GoogleComputeRegionBackendServiceCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

---

##### `circuitBreakersInput`<sup>Optional</sup> <a name="circuitBreakersInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakersInput"></a>

```typescript
public readonly circuitBreakersInput: GoogleComputeRegionBackendServiceCircuitBreakers;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

---

##### `connectionDrainingTimeoutSecInput`<sup>Optional</sup> <a name="connectionDrainingTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSecInput"></a>

```typescript
public readonly connectionDrainingTimeoutSecInput: number;
```

- *Type:* number

---

##### `connectionTrackingPolicyInput`<sup>Optional</sup> <a name="connectionTrackingPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicyInput"></a>

```typescript
public readonly connectionTrackingPolicyInput: GoogleComputeRegionBackendServiceConnectionTrackingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---

##### `consistentHashInput`<sup>Optional</sup> <a name="consistentHashInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHashInput"></a>

```typescript
public readonly consistentHashInput: GoogleComputeRegionBackendServiceConsistentHash;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableCdnInput`<sup>Optional</sup> <a name="enableCdnInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdnInput"></a>

```typescript
public readonly enableCdnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failoverPolicyInput`<sup>Optional</sup> <a name="failoverPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicyInput"></a>

```typescript
public readonly failoverPolicyInput: GoogleComputeRegionBackendServiceFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

---

##### `healthChecksInput`<sup>Optional</sup> <a name="healthChecksInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecksInput"></a>

```typescript
public readonly healthChecksInput: string[];
```

- *Type:* string[]

---

##### `iapInput`<sup>Optional</sup> <a name="iapInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iapInput"></a>

```typescript
public readonly iapInput: GoogleComputeRegionBackendServiceIap;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressSelectionPolicyInput`<sup>Optional</sup> <a name="ipAddressSelectionPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicyInput"></a>

```typescript
public readonly ipAddressSelectionPolicyInput: string;
```

- *Type:* string

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `localityLbPolicyInput`<sup>Optional</sup> <a name="localityLbPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicyInput"></a>

```typescript
public readonly localityLbPolicyInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: GoogleComputeRegionBackendServiceLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `outlierDetectionInput`<sup>Optional</sup> <a name="outlierDetectionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetectionInput"></a>

```typescript
public readonly outlierDetectionInput: GoogleComputeRegionBackendServiceOutlierDetection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinityInput"></a>

```typescript
public readonly sessionAffinityInput: string;
```

- *Type:* string

---

##### `strongSessionAffinityCookieInput`<sup>Optional</sup> <a name="strongSessionAffinityCookieInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookieInput"></a>

```typescript
public readonly strongSessionAffinityCookieInput: GoogleComputeRegionBackendServiceStrongSessionAffinityCookie;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---

##### `subsettingInput`<sup>Optional</sup> <a name="subsettingInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsettingInput"></a>

```typescript
public readonly subsettingInput: GoogleComputeRegionBackendServiceSubsetting;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSecInput"></a>

```typescript
public readonly timeoutSecInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionBackendServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

---

##### `affinityCookieTtlSec`<sup>Required</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSec"></a>

```typescript
public readonly affinityCookieTtlSec: number;
```

- *Type:* number

---

##### `connectionDrainingTimeoutSec`<sup>Required</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec"></a>

```typescript
public readonly connectionDrainingTimeoutSec: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableCdn`<sup>Required</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdn"></a>

```typescript
public readonly enableCdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecks"></a>

```typescript
public readonly healthChecks: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddressSelectionPolicy`<sup>Required</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicy"></a>

```typescript
public readonly ipAddressSelectionPolicy: string;
```

- *Type:* string

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `localityLbPolicy`<sup>Required</sup> <a name="localityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicy"></a>

```typescript
public readonly localityLbPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionBackendServiceBackend <a name="GoogleComputeRegionBackendServiceBackend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceBackend: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.group">group</a></code> | <code>string</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.balancingMode">balancingMode</a></code> | <code>string</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.capacityScaler">capacityScaler</a></code> | <code>number</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.failover">failover</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field designates whether this is a failover backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnections">maxConnections</a></code> | <code>number</code> | The max number of simultaneous connections for the group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>number</code> | The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>number</code> | The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRate">maxRate</a></code> | <code>number</code> | The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>number</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>number</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxUtilization">maxUtilization</a></code> | <code>number</code> | Used when balancingMode is UTILIZATION. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The fully-qualified URL of an Instance Group or Network Endpoint Group resource.

In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.

For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.

Backend services cannot mix Instance Group and
Network Endpoint Group backends.

When the 'load_balancing_scheme' is INTERNAL, only instance groups
are supported.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#group GoogleComputeRegionBackendService#group}

---

##### `balancingMode`<sup>Optional</sup> <a name="balancingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.balancingMode"></a>

```typescript
public readonly balancingMode: string;
```

- *Type:* string

Specifies the balancing mode for this backend.

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#balancing_mode GoogleComputeRegionBackendService#balancing_mode}

---

##### `capacityScaler`<sup>Optional</sup> <a name="capacityScaler" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.capacityScaler"></a>

```typescript
public readonly capacityScaler: number;
```

- *Type:* number

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

~>**NOTE**: This field cannot be set for
INTERNAL region backend services (default loadBalancingScheme),
but is required for non-INTERNAL backend service. The total
capacity_scaler for all backends must be non-zero.

A setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#capacity_scaler GoogleComputeRegionBackendService#capacity_scaler}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#description GoogleComputeRegionBackendService#description}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.failover"></a>

```typescript
public readonly failover: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field designates whether this is a failover backend.

More
than one failover backend can be configured for a given RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#failover GoogleComputeRegionBackendService#failover}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

The max number of simultaneous connections for the group.

Can
be used with either CONNECTION or UTILIZATION balancing modes.
Cannot be set for INTERNAL backend services.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_connections GoogleComputeRegionBackendService#max_connections}

---

##### `maxConnectionsPerEndpoint`<sup>Optional</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```typescript
public readonly maxConnectionsPerEndpoint: number;
```

- *Type:* number

The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group. Can be
used in either CONNECTION or UTILIZATION balancing modes. For
CONNECTION mode, either maxConnections or
maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_connections_per_endpoint GoogleComputeRegionBackendService#max_connections_per_endpoint}

---

##### `maxConnectionsPerInstance`<sup>Optional</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```typescript
public readonly maxConnectionsPerInstance: number;
```

- *Type:* number

The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group.
Can be used in either CONNECTION or UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_connections_per_instance GoogleComputeRegionBackendService#max_connections_per_instance}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. Either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_rate GoogleComputeRegionBackendService#max_rate}

---

##### `maxRatePerEndpoint`<sup>Optional</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerEndpoint"></a>

```typescript
public readonly maxRatePerEndpoint: number;
```

- *Type:* number

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_rate_per_endpoint GoogleComputeRegionBackendService#max_rate_per_endpoint}

---

##### `maxRatePerInstance`<sup>Optional</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerInstance"></a>

```typescript
public readonly maxRatePerInstance: number;
```

- *Type:* number

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_rate_per_instance GoogleComputeRegionBackendService#max_rate_per_instance}

---

##### `maxUtilization`<sup>Optional</sup> <a name="maxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxUtilization"></a>

```typescript
public readonly maxUtilization: number;
```

- *Type:* number

Used when balancingMode is UTILIZATION.

This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
Cannot be set for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_utilization GoogleComputeRegionBackendService#max_utilization}

---

### GoogleComputeRegionBackendServiceCdnPolicy <a name="GoogleComputeRegionBackendServiceCdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceCdnPolicy: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>string</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>[]</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.serveWhileStale">serveWhileStale</a></code> | <code>number</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>number</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#cache_key_policy GoogleComputeRegionBackendService#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#cache_mode GoogleComputeRegionBackendService#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.clientTtl"></a>

```typescript
public readonly clientTtl: number;
```

- *Type:* number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#client_ttl GoogleComputeRegionBackendService#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#default_ttl GoogleComputeRegionBackendService#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_ttl GoogleComputeRegionBackendService#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#negative_caching GoogleComputeRegionBackendService#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: IResolvable | GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>[]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#negative_caching_policy GoogleComputeRegionBackendService#negative_caching_policy}

---

##### `serveWhileStale`<sup>Optional</sup> <a name="serveWhileStale" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.serveWhileStale"></a>

```typescript
public readonly serveWhileStale: number;
```

- *Type:* number

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#serve_while_stale GoogleComputeRegionBackendService#serve_while_stale}

---

##### `signedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```typescript
public readonly signedUrlCacheMaxAgeSec: number;
```

- *Type:* number

Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s).

After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#signed_url_cache_max_age_sec GoogleComputeRegionBackendService#signed_url_cache_max_age_sec}

---

### GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy <a name="GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">includeHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">includeNamedCookies</a></code> | <code>string[]</code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">includeProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">includeQueryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>string[]</code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>string[]</code> | Names of query string parameters to include in cache keys. |

---

##### `includeHost`<sup>Optional</sup> <a name="includeHost" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```typescript
public readonly includeHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#include_host GoogleComputeRegionBackendService#include_host}

---

##### `includeNamedCookies`<sup>Optional</sup> <a name="includeNamedCookies" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```typescript
public readonly includeNamedCookies: string[];
```

- *Type:* string[]

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#include_named_cookies GoogleComputeRegionBackendService#include_named_cookies}

---

##### `includeProtocol`<sup>Optional</sup> <a name="includeProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```typescript
public readonly includeProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#include_protocol GoogleComputeRegionBackendService#include_protocol}

---

##### `includeQueryString`<sup>Optional</sup> <a name="includeQueryString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```typescript
public readonly includeQueryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#include_query_string GoogleComputeRegionBackendService#include_query_string}

---

##### `queryStringBlacklist`<sup>Optional</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```typescript
public readonly queryStringBlacklist: string[];
```

- *Type:* string[]

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#query_string_blacklist GoogleComputeRegionBackendService#query_string_blacklist}

---

##### `queryStringWhitelist`<sup>Optional</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```typescript
public readonly queryStringWhitelist: string[];
```

- *Type:* string[]

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#query_string_whitelist GoogleComputeRegionBackendService#query_string_whitelist}

---

### GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy <a name="GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>number</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>number</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#code GoogleComputeRegionBackendService#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}

---

### GoogleComputeRegionBackendServiceCircuitBreakers <a name="GoogleComputeRegionBackendServiceCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceCircuitBreakers: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.connectTimeout">connectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | connect_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxConnections">maxConnections</a></code> | <code>number</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests">maxPendingRequests</a></code> | <code>number</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequests">maxRequests</a></code> | <code>number</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>number</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

connect_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#connect_timeout GoogleComputeRegionBackendService#connect_timeout}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_connections GoogleComputeRegionBackendService#max_connections}

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="maxPendingRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```typescript
public readonly maxPendingRequests: number;
```

- *Type:* number

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_pending_requests GoogleComputeRegionBackendService#max_pending_requests}

---

##### `maxRequests`<sup>Optional</sup> <a name="maxRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequests"></a>

```typescript
public readonly maxRequests: number;
```

- *Type:* number

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_requests GoogleComputeRegionBackendService#max_requests}

---

##### `maxRequestsPerConnection`<sup>Optional</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```typescript
public readonly maxRequestsPerConnection: number;
```

- *Type:* number

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_requests_per_connection GoogleComputeRegionBackendService#max_requests_per_connection}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_retries GoogleComputeRegionBackendService#max_retries}

---

### GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout <a name="GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceCircuitBreakersConnectTimeout: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceConfig <a name="GoogleComputeRegionBackendServiceConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceConfig: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>number</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.backend">backend</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>[]</code> | backend block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>number</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionTrackingPolicy">connectionTrackingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | connection_tracking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.enableCdn">enableCdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, enable Cloud CDN for this RegionBackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.failoverPolicy">failoverPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | failover_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.healthChecks">healthChecks</a></code> | <code>string[]</code> | The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#id GoogleComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>string</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | Indicates what kind of load balancing this regional backend service will be used for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.localityLbPolicy">localityLbPolicy</a></code> | <code>string</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.network">network</a></code> | <code>string</code> | The URL of the network to which this backend service belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.portName">portName</a></code> | <code>string</code> | A named port on a backend instance group representing the port for communication to the backend VMs in that group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#project GoogleComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.protocol">protocol</a></code> | <code>string</code> | The protocol this RegionBackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.subsetting">subsetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | subsetting block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `affinityCookieTtlSec`<sup>Optional</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.affinityCookieTtlSec"></a>

```typescript
public readonly affinityCookieTtlSec: number;
```

- *Type:* number

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#affinity_cookie_ttl_sec GoogleComputeRegionBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.backend"></a>

```typescript
public readonly backend: IResolvable | GoogleComputeRegionBackendServiceBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>[]

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#backend GoogleComputeRegionBackendService#backend}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: GoogleComputeRegionBackendServiceCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#cdn_policy GoogleComputeRegionBackendService#cdn_policy}

---

##### `circuitBreakers`<sup>Optional</sup> <a name="circuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.circuitBreakers"></a>

```typescript
public readonly circuitBreakers: GoogleComputeRegionBackendServiceCircuitBreakers;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#circuit_breakers GoogleComputeRegionBackendService#circuit_breakers}

---

##### `connectionDrainingTimeoutSec`<sup>Optional</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```typescript
public readonly connectionDrainingTimeoutSec: number;
```

- *Type:* number

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#connection_draining_timeout_sec GoogleComputeRegionBackendService#connection_draining_timeout_sec}

---

##### `connectionTrackingPolicy`<sup>Optional</sup> <a name="connectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionTrackingPolicy"></a>

```typescript
public readonly connectionTrackingPolicy: GoogleComputeRegionBackendServiceConnectionTrackingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

connection_tracking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#connection_tracking_policy GoogleComputeRegionBackendService#connection_tracking_policy}

---

##### `consistentHash`<sup>Optional</sup> <a name="consistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.consistentHash"></a>

```typescript
public readonly consistentHash: GoogleComputeRegionBackendServiceConsistentHash;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#consistent_hash GoogleComputeRegionBackendService#consistent_hash}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#description GoogleComputeRegionBackendService#description}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.enableCdn"></a>

```typescript
public readonly enableCdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, enable Cloud CDN for this RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#enable_cdn GoogleComputeRegionBackendService#enable_cdn}

---

##### `failoverPolicy`<sup>Optional</sup> <a name="failoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.failoverPolicy"></a>

```typescript
public readonly failoverPolicy: GoogleComputeRegionBackendServiceFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#failover_policy GoogleComputeRegionBackendService#failover_policy}

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.healthChecks"></a>

```typescript
public readonly healthChecks: string[];
```

- *Type:* string[]

The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#health_checks GoogleComputeRegionBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.iap"></a>

```typescript
public readonly iap: GoogleComputeRegionBackendServiceIap;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#iap GoogleComputeRegionBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#id GoogleComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressSelectionPolicy`<sup>Optional</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.ipAddressSelectionPolicy"></a>

```typescript
public readonly ipAddressSelectionPolicy: string;
```

- *Type:* string

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#ip_address_selection_policy GoogleComputeRegionBackendService#ip_address_selection_policy}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

Indicates what kind of load balancing this regional backend service will be used for.

A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "INTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#load_balancing_scheme GoogleComputeRegionBackendService#load_balancing_scheme}

---

##### `localityLbPolicy`<sup>Optional</sup> <a name="localityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.localityLbPolicy"></a>

```typescript
public readonly localityLbPolicy: string;
```

- *Type:* string

The load balancing algorithm used within the scope of the locality. The possible values are:.

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
                 is selected in round robin order.

* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
                   hosts and picks the host which has fewer active requests.

* 'RING_HASH': The ring/modulo hash load balancer implements consistent
               hashing to backends. The algorithm has the property that the
               addition/removal of a host from a set of N hosts only affects
               1/N of the requests.

* 'RANDOM': The load balancer selects a random healthy host.

* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
                          connection metadata, i.e., connections are opened
                          to the same address as the destination address of
                          the incoming connection before the connection
                          was redirected to the load balancer.

* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
            Maglev is not as stable as ring hash but has faster table lookup
            build times and host selection times. For more information about
            Maglev, refer to https://ai.google/research/pubs/pub44824

* 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
                     reported weights. Only applicable to loadBalancingScheme
                     EXTERNAL. If set, the Backend Service must
                     configure a non legacy HTTP-based Health Check, and
                     health check replies are expected to contain
                     non-standard HTTP response header field
                     X-Load-Balancing-Endpoint-Weight to specify the
                     per-instance weights. If set, Load Balancing is weight
                     based on the per-instance weights reported in the last
                     processed health check replies, as long as every
                     instance either reported a valid weight or had
                     UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
                     equal-weight.

locality_lb_policy is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#locality_lb_policy GoogleComputeRegionBackendService#locality_lb_policy}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleComputeRegionBackendServiceLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#log_config GoogleComputeRegionBackendService#log_config}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The URL of the network to which this backend service belongs.

This field can only be specified when the load balancing scheme is set to INTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#network GoogleComputeRegionBackendService#network}

---

##### `outlierDetection`<sup>Optional</sup> <a name="outlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.outlierDetection"></a>

```typescript
public readonly outlierDetection: GoogleComputeRegionBackendServiceOutlierDetection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#outlier_detection GoogleComputeRegionBackendService#outlier_detection}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

A named port on a backend instance group representing the port for communication to the backend VMs in that group.

Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#port_name GoogleComputeRegionBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#project GoogleComputeRegionBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol this RegionBackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#protocol GoogleComputeRegionBackendService#protocol}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#region GoogleComputeRegionBackendService#region}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#security_policy GoogleComputeRegionBackendService#security_policy}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#session_affinity GoogleComputeRegionBackendService#session_affinity}

---

##### `strongSessionAffinityCookie`<sup>Optional</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.strongSessionAffinityCookie"></a>

```typescript
public readonly strongSessionAffinityCookie: GoogleComputeRegionBackendServiceStrongSessionAffinityCookie;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#strong_session_affinity_cookie GoogleComputeRegionBackendService#strong_session_affinity_cookie}

---

##### `subsetting`<sup>Optional</sup> <a name="subsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.subsetting"></a>

```typescript
public readonly subsetting: GoogleComputeRegionBackendServiceSubsetting;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

subsetting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#subsetting GoogleComputeRegionBackendService#subsetting}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionBackendServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#timeouts GoogleComputeRegionBackendService#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#timeout_sec GoogleComputeRegionBackendService#timeout_sec}

---

### GoogleComputeRegionBackendServiceConnectionTrackingPolicy <a name="GoogleComputeRegionBackendServiceConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceConnectionTrackingPolicy: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.connectionPersistenceOnUnhealthyBackends">connectionPersistenceOnUnhealthyBackends</a></code> | <code>string</code> | Specifies connection persistence when backends are unhealthy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.enableStrongAffinity">enableStrongAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.idleTimeoutSec">idleTimeoutSec</a></code> | <code>number</code> | Specifies how long to keep a Connection Tracking entry while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.trackingMode">trackingMode</a></code> | <code>string</code> | Specifies the key used for connection tracking. |

---

##### `connectionPersistenceOnUnhealthyBackends`<sup>Optional</sup> <a name="connectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.connectionPersistenceOnUnhealthyBackends"></a>

```typescript
public readonly connectionPersistenceOnUnhealthyBackends: string;
```

- *Type:* string

Specifies connection persistence when backends are unhealthy.

If set to 'DEFAULT_FOR_PROTOCOL', the existing connections persist on
unhealthy backends only for connection-oriented protocols (TCP and SCTP)
and only if the Tracking Mode is PER_CONNECTION (default tracking mode)
or the Session Affinity is configured for 5-tuple. They do not persist
for UDP.

If set to 'NEVER_PERSIST', after a backend becomes unhealthy, the existing
connections on the unhealthy backend are never persisted on the unhealthy
backend. They are always diverted to newly selected healthy backends
(unless all backends are unhealthy).

If set to 'ALWAYS_PERSIST', existing connections always persist on
unhealthy backends regardless of protocol and session affinity. It is
generally not recommended to use this mode overriding the default. Default value: "DEFAULT_FOR_PROTOCOL" Possible values: ["DEFAULT_FOR_PROTOCOL", "NEVER_PERSIST", "ALWAYS_PERSIST"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#connection_persistence_on_unhealthy_backends GoogleComputeRegionBackendService#connection_persistence_on_unhealthy_backends}

---

##### `enableStrongAffinity`<sup>Optional</sup> <a name="enableStrongAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.enableStrongAffinity"></a>

```typescript
public readonly enableStrongAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#enable_strong_affinity GoogleComputeRegionBackendService#enable_strong_affinity}

---

##### `idleTimeoutSec`<sup>Optional</sup> <a name="idleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.idleTimeoutSec"></a>

```typescript
public readonly idleTimeoutSec: number;
```

- *Type:* number

Specifies how long to keep a Connection Tracking entry while there is no matching traffic (in seconds).

For L4 ILB the minimum(default) is 10 minutes and maximum is 16 hours.

For NLB the minimum(default) is 60 seconds and the maximum is 16 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#idle_timeout_sec GoogleComputeRegionBackendService#idle_timeout_sec}

---

##### `trackingMode`<sup>Optional</sup> <a name="trackingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.trackingMode"></a>

```typescript
public readonly trackingMode: string;
```

- *Type:* string

Specifies the key used for connection tracking.

There are two options:
'PER_CONNECTION': The Connection Tracking is performed as per the
Connection Key (default Hash Method) for the specific protocol.

'PER_SESSION': The Connection Tracking is performed as per the
configured Session Affinity. It matches the configured Session Affinity. Default value: "PER_CONNECTION" Possible values: ["PER_CONNECTION", "PER_SESSION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#tracking_mode GoogleComputeRegionBackendService#tracking_mode}

---

### GoogleComputeRegionBackendServiceConsistentHash <a name="GoogleComputeRegionBackendServiceConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceConsistentHash: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.minimumRingSize">minimumRingSize</a></code> | <code>number</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `httpCookie`<sup>Optional</sup> <a name="httpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpCookie"></a>

```typescript
public readonly httpCookie: GoogleComputeRegionBackendServiceConsistentHashHttpCookie;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#http_cookie GoogleComputeRegionBackendService#http_cookie}

---

##### `httpHeaderName`<sup>Optional</sup> <a name="httpHeaderName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#http_header_name GoogleComputeRegionBackendService#http_header_name}

---

##### `minimumRingSize`<sup>Optional</sup> <a name="minimumRingSize" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.minimumRingSize"></a>

```typescript
public readonly minimumRingSize: number;
```

- *Type:* number

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#minimum_ring_size GoogleComputeRegionBackendService#minimum_ring_size}

---

### GoogleComputeRegionBackendServiceConsistentHashHttpCookie <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceConsistentHashHttpCookie: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.name">name</a></code> | <code>string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.path">path</a></code> | <code>string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#path GoogleComputeRegionBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```typescript
public readonly ttl: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}

---

### GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceConsistentHashHttpCookieTtl: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceFailoverPolicy <a name="GoogleComputeRegionBackendServiceFailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceFailoverPolicy: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover">disableConnectionDrainOnFailover</a></code> | <code>boolean \| cdktf.IResolvable</code> | On failover or failback, this field indicates whether connection drain will be honored. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy">dropTrafficIfUnhealthy</a></code> | <code>boolean \| cdktf.IResolvable</code> | This option is used only when no healthy VMs are detected in the primary and backup instance groups. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.failoverRatio">failoverRatio</a></code> | <code>number</code> | The value of the field must be in [0, 1]. |

---

##### `disableConnectionDrainOnFailover`<sup>Optional</sup> <a name="disableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover"></a>

```typescript
public readonly disableConnectionDrainOnFailover: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

On failover or failback, this field indicates whether connection drain will be honored.

Setting this to true has the following effect: connections
to the old active pool are not drained. Connections to the new active pool
use the timeout of 10 min (currently fixed). Setting to false has the
following effect: both old and new connections will have a drain timeout
of 10 min.
This can be set to true only if the protocol is TCP.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#disable_connection_drain_on_failover GoogleComputeRegionBackendService#disable_connection_drain_on_failover}

---

##### `dropTrafficIfUnhealthy`<sup>Optional</sup> <a name="dropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy"></a>

```typescript
public readonly dropTrafficIfUnhealthy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This option is used only when no healthy VMs are detected in the primary and backup instance groups.

When set to true, traffic is dropped. When
set to false, new connections are sent across all VMs in the primary group.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#drop_traffic_if_unhealthy GoogleComputeRegionBackendService#drop_traffic_if_unhealthy}

---

##### `failoverRatio`<sup>Optional</sup> <a name="failoverRatio" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.failoverRatio"></a>

```typescript
public readonly failoverRatio: number;
```

- *Type:* number

The value of the field must be in [0, 1].

If the ratio of the healthy
VMs in the primary backend is at or below this number, traffic arriving
at the load-balanced IP will be directed to the failover backend.
In case where 'failoverRatio' is not set or all the VMs in the backup
backend are unhealthy, the traffic will be directed back to the primary
backend in the "force" mode, where traffic will be spread to the healthy
VMs with the best effort, or to all VMs when no VM is healthy.
This field is only used with l4 load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#failover_ratio GoogleComputeRegionBackendService#failover_ratio}

---

### GoogleComputeRegionBackendServiceIap <a name="GoogleComputeRegionBackendServiceIap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceIap: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the serving infrastructure will authenticate and authorize all incoming requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientId">oauth2ClientId</a></code> | <code>string</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>string</code> | OAuth2 Client Secret for IAP. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the serving infrastructure will authenticate and authorize all incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#enabled GoogleComputeRegionBackendService#enabled}

---

##### `oauth2ClientId`<sup>Optional</sup> <a name="oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientId"></a>

```typescript
public readonly oauth2ClientId: string;
```

- *Type:* string

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#oauth2_client_id GoogleComputeRegionBackendService#oauth2_client_id}

---

##### `oauth2ClientSecret`<sup>Optional</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientSecret"></a>

```typescript
public readonly oauth2ClientSecret: string;
```

- *Type:* string

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#oauth2_client_secret GoogleComputeRegionBackendService#oauth2_client_secret}

---

### GoogleComputeRegionBackendServiceLogConfig <a name="GoogleComputeRegionBackendServiceLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceLogConfig: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.sampleRate">sampleRate</a></code> | <code>number</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#enable GoogleComputeRegionBackendService#enable}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#sample_rate GoogleComputeRegionBackendService#sample_rate}

---

### GoogleComputeRegionBackendServiceOutlierDetection <a name="GoogleComputeRegionBackendServiceOutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceOutlierDetection: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors">consecutiveErrors</a></code> | <code>number</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>number</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>number</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>number</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>number</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>number</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `baseEjectionTime`<sup>Optional</sup> <a name="baseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```typescript
public readonly baseEjectionTime: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#base_ejection_time GoogleComputeRegionBackendService#base_ejection_time}

---

##### `consecutiveErrors`<sup>Optional</sup> <a name="consecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```typescript
public readonly consecutiveErrors: number;
```

- *Type:* number

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#consecutive_errors GoogleComputeRegionBackendService#consecutive_errors}

---

##### `consecutiveGatewayFailure`<sup>Optional</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```typescript
public readonly consecutiveGatewayFailure: number;
```

- *Type:* number

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#consecutive_gateway_failure GoogleComputeRegionBackendService#consecutive_gateway_failure}

---

##### `enforcingConsecutiveErrors`<sup>Optional</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```typescript
public readonly enforcingConsecutiveErrors: number;
```

- *Type:* number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#enforcing_consecutive_errors GoogleComputeRegionBackendService#enforcing_consecutive_errors}

---

##### `enforcingConsecutiveGatewayFailure`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```typescript
public readonly enforcingConsecutiveGatewayFailure: number;
```

- *Type:* number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#enforcing_consecutive_gateway_failure GoogleComputeRegionBackendService#enforcing_consecutive_gateway_failure}

---

##### `enforcingSuccessRate`<sup>Optional</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```typescript
public readonly enforcingSuccessRate: number;
```

- *Type:* number

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#enforcing_success_rate GoogleComputeRegionBackendService#enforcing_success_rate}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.interval"></a>

```typescript
public readonly interval: GoogleComputeRegionBackendServiceOutlierDetectionInterval;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#interval GoogleComputeRegionBackendService#interval}

---

##### `maxEjectionPercent`<sup>Optional</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```typescript
public readonly maxEjectionPercent: number;
```

- *Type:* number

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#max_ejection_percent GoogleComputeRegionBackendService#max_ejection_percent}

---

##### `successRateMinimumHosts`<sup>Optional</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```typescript
public readonly successRateMinimumHosts: number;
```

- *Type:* number

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#success_rate_minimum_hosts GoogleComputeRegionBackendService#success_rate_minimum_hosts}

---

##### `successRateRequestVolume`<sup>Optional</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```typescript
public readonly successRateRequestVolume: number;
```

- *Type:* number

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#success_rate_request_volume GoogleComputeRegionBackendService#success_rate_request_volume}

---

##### `successRateStdevFactor`<sup>Optional</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

```typescript
public readonly successRateStdevFactor: number;
```

- *Type:* number

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#success_rate_stdev_factor GoogleComputeRegionBackendService#success_rate_stdev_factor}

---

### GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime <a name="GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceOutlierDetectionInterval <a name="GoogleComputeRegionBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceOutlierDetectionInterval: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceStrongSessionAffinityCookie <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceStrongSessionAffinityCookie: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.name">name</a></code> | <code>string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.path">path</a></code> | <code>string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#path GoogleComputeRegionBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.ttl"></a>

```typescript
public readonly ttl: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}

---

### GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceStrongSessionAffinityCookieTtl: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceSubsetting <a name="GoogleComputeRegionBackendServiceSubsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceSubsetting: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting.property.policy">policy</a></code> | <code>string</code> | The algorithm used for subsetting. Possible values: ["CONSISTENT_HASH_SUBSETTING"]. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

The algorithm used for subsetting. Possible values: ["CONSISTENT_HASH_SUBSETTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#policy GoogleComputeRegionBackendService#policy}

---

### GoogleComputeRegionBackendServiceTimeouts <a name="GoogleComputeRegionBackendServiceTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

const googleComputeRegionBackendServiceTimeouts: googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#create GoogleComputeRegionBackendService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#delete GoogleComputeRegionBackendService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#update GoogleComputeRegionBackendService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#create GoogleComputeRegionBackendService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#delete GoogleComputeRegionBackendService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_backend_service#update GoogleComputeRegionBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionBackendServiceBackendList <a name="GoogleComputeRegionBackendServiceBackendList" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionBackendServiceBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionBackendServiceBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>[]

---


### GoogleComputeRegionBackendServiceBackendOutputReference <a name="GoogleComputeRegionBackendServiceBackendOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetBalancingMode">resetBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler">resetCapacityScaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetFailover">resetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">resetMaxConnectionsPerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">resetMaxConnectionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">resetMaxRatePerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance">resetMaxRatePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization">resetMaxUtilization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBalancingMode` <a name="resetBalancingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetBalancingMode"></a>

```typescript
public resetBalancingMode(): void
```

##### `resetCapacityScaler` <a name="resetCapacityScaler" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```typescript
public resetCapacityScaler(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFailover` <a name="resetFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetFailover"></a>

```typescript
public resetFailover(): void
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnections"></a>

```typescript
public resetMaxConnections(): void
```

##### `resetMaxConnectionsPerEndpoint` <a name="resetMaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```typescript
public resetMaxConnectionsPerEndpoint(): void
```

##### `resetMaxConnectionsPerInstance` <a name="resetMaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```typescript
public resetMaxConnectionsPerInstance(): void
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRate"></a>

```typescript
public resetMaxRate(): void
```

##### `resetMaxRatePerEndpoint` <a name="resetMaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```typescript
public resetMaxRatePerEndpoint(): void
```

##### `resetMaxRatePerInstance` <a name="resetMaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```typescript
public resetMaxRatePerInstance(): void
```

##### `resetMaxUtilization` <a name="resetMaxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```typescript
public resetMaxUtilization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput">balancingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput">capacityScalerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failoverInput">failoverInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">maxConnectionsPerEndpointInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">maxConnectionsPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">maxRatePerEndpointInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">maxRatePerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput">maxUtilizationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode">balancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler">capacityScaler</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failover">failover</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate">maxRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization">maxUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `balancingModeInput`<sup>Optional</sup> <a name="balancingModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```typescript
public readonly balancingModeInput: string;
```

- *Type:* string

---

##### `capacityScalerInput`<sup>Optional</sup> <a name="capacityScalerInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```typescript
public readonly capacityScalerInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failoverInput"></a>

```typescript
public readonly failoverInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* number

---

##### `maxConnectionsPerEndpointInput`<sup>Optional</sup> <a name="maxConnectionsPerEndpointInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```typescript
public readonly maxConnectionsPerEndpointInput: number;
```

- *Type:* number

---

##### `maxConnectionsPerInstanceInput`<sup>Optional</sup> <a name="maxConnectionsPerInstanceInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```typescript
public readonly maxConnectionsPerInstanceInput: number;
```

- *Type:* number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRateInput"></a>

```typescript
public readonly maxRateInput: number;
```

- *Type:* number

---

##### `maxRatePerEndpointInput`<sup>Optional</sup> <a name="maxRatePerEndpointInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```typescript
public readonly maxRatePerEndpointInput: number;
```

- *Type:* number

---

##### `maxRatePerInstanceInput`<sup>Optional</sup> <a name="maxRatePerInstanceInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```typescript
public readonly maxRatePerInstanceInput: number;
```

- *Type:* number

---

##### `maxUtilizationInput`<sup>Optional</sup> <a name="maxUtilizationInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```typescript
public readonly maxUtilizationInput: number;
```

- *Type:* number

---

##### `balancingMode`<sup>Required</sup> <a name="balancingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode"></a>

```typescript
public readonly balancingMode: string;
```

- *Type:* string

---

##### `capacityScaler`<sup>Required</sup> <a name="capacityScaler" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler"></a>

```typescript
public readonly capacityScaler: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failover"></a>

```typescript
public readonly failover: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxConnectionsPerEndpoint`<sup>Required</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```typescript
public readonly maxConnectionsPerEndpoint: number;
```

- *Type:* number

---

##### `maxConnectionsPerInstance`<sup>Required</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```typescript
public readonly maxConnectionsPerInstance: number;
```

- *Type:* number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate"></a>

```typescript
public readonly maxRate: number;
```

- *Type:* number

---

##### `maxRatePerEndpoint`<sup>Required</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```typescript
public readonly maxRatePerEndpoint: number;
```

- *Type:* number

---

##### `maxRatePerInstance`<sup>Required</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```typescript
public readonly maxRatePerInstance: number;
```

- *Type:* number

---

##### `maxUtilization`<sup>Required</sup> <a name="maxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization"></a>

```typescript
public readonly maxUtilization: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionBackendServiceBackend;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>

---


### GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">resetIncludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">resetIncludeNamedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">resetIncludeProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">resetIncludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">resetQueryStringBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">resetQueryStringWhitelist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeHost` <a name="resetIncludeHost" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```typescript
public resetIncludeHost(): void
```

##### `resetIncludeNamedCookies` <a name="resetIncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```typescript
public resetIncludeNamedCookies(): void
```

##### `resetIncludeProtocol` <a name="resetIncludeProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```typescript
public resetIncludeProtocol(): void
```

##### `resetIncludeQueryString` <a name="resetIncludeQueryString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```typescript
public resetIncludeQueryString(): void
```

##### `resetQueryStringBlacklist` <a name="resetQueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```typescript
public resetQueryStringBlacklist(): void
```

##### `resetQueryStringWhitelist` <a name="resetQueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```typescript
public resetQueryStringWhitelist(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">includeHostInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">includeNamedCookiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">includeProtocolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">includeQueryStringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">queryStringBlacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">queryStringWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">includeHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">includeNamedCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">includeProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">includeQueryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeHostInput`<sup>Optional</sup> <a name="includeHostInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```typescript
public readonly includeHostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNamedCookiesInput`<sup>Optional</sup> <a name="includeNamedCookiesInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```typescript
public readonly includeNamedCookiesInput: string[];
```

- *Type:* string[]

---

##### `includeProtocolInput`<sup>Optional</sup> <a name="includeProtocolInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```typescript
public readonly includeProtocolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeQueryStringInput`<sup>Optional</sup> <a name="includeQueryStringInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```typescript
public readonly includeQueryStringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryStringBlacklistInput`<sup>Optional</sup> <a name="queryStringBlacklistInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```typescript
public readonly queryStringBlacklistInput: string[];
```

- *Type:* string[]

---

##### `queryStringWhitelistInput`<sup>Optional</sup> <a name="queryStringWhitelistInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```typescript
public readonly queryStringWhitelistInput: string[];
```

- *Type:* string[]

---

##### `includeHost`<sup>Required</sup> <a name="includeHost" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```typescript
public readonly includeHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNamedCookies`<sup>Required</sup> <a name="includeNamedCookies" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```typescript
public readonly includeNamedCookies: string[];
```

- *Type:* string[]

---

##### `includeProtocol`<sup>Required</sup> <a name="includeProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```typescript
public readonly includeProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeQueryString`<sup>Required</sup> <a name="includeQueryString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```typescript
public readonly includeQueryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryStringBlacklist`<sup>Required</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```typescript
public readonly queryStringBlacklist: string[];
```

- *Type:* string[]

---

##### `queryStringWhitelist`<sup>Required</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```typescript
public readonly queryStringWhitelist: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList <a name="GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>[]

---


### GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">codeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: number;
```

- *Type:* number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>

---


### GoogleComputeRegionBackendServiceCdnPolicyOutputReference <a name="GoogleComputeRegionBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">putNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale">resetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">resetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```typescript
public putCacheKeyPolicy(value: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `putNegativeCachingPolicy` <a name="putNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```typescript
public putNegativeCachingPolicy(value: IResolvable | GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>[]

---

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```typescript
public resetCacheKeyPolicy(): void
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```typescript
public resetCacheMode(): void
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```typescript
public resetClientTtl(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```typescript
public resetNegativeCaching(): void
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```typescript
public resetNegativeCachingPolicy(): void
```

##### `resetServeWhileStale` <a name="resetServeWhileStale" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```typescript
public resetServeWhileStale(): void
```

##### `resetSignedUrlCacheMaxAgeSec` <a name="resetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```typescript
public resetSignedUrlCacheMaxAgeSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">serveWhileStaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signedUrlCacheMaxAgeSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale">serveWhileStale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```typescript
public readonly cacheKeyPolicyInput: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```typescript
public readonly cacheModeInput: string;
```

- *Type:* string

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```typescript
public readonly clientTtlInput: number;
```

- *Type:* number

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```typescript
public readonly negativeCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```typescript
public readonly negativeCachingPolicyInput: IResolvable | GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>[]

---

##### `serveWhileStaleInput`<sup>Optional</sup> <a name="serveWhileStaleInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```typescript
public readonly serveWhileStaleInput: number;
```

- *Type:* number

---

##### `signedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```typescript
public readonly signedUrlCacheMaxAgeSecInput: number;
```

- *Type:* number

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```typescript
public readonly clientTtl: number;
```

- *Type:* number

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serveWhileStale`<sup>Required</sup> <a name="serveWhileStale" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```typescript
public readonly serveWhileStale: number;
```

- *Type:* number

---

##### `signedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```typescript
public readonly signedUrlCacheMaxAgeSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

---


### GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference <a name="GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---


### GoogleComputeRegionBackendServiceCircuitBreakersOutputReference <a name="GoogleComputeRegionBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.putConnectTimeout">putConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">resetMaxPendingRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests">resetMaxRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">resetMaxRequestsPerConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectTimeout` <a name="putConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.putConnectTimeout"></a>

```typescript
public putConnectTimeout(value: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.putConnectTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```typescript
public resetMaxConnections(): void
```

##### `resetMaxPendingRequests` <a name="resetMaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```typescript
public resetMaxPendingRequests(): void
```

##### `resetMaxRequests` <a name="resetMaxRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```typescript
public resetMaxRequests(): void
```

##### `resetMaxRequestsPerConnection` <a name="resetMaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```typescript
public resetMaxRequestsPerConnection(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout">connectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">maxPendingRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">maxRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">maxRequestsPerConnectionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests">maxRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference</a>

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* number

---

##### `maxPendingRequestsInput`<sup>Optional</sup> <a name="maxPendingRequestsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```typescript
public readonly maxPendingRequestsInput: number;
```

- *Type:* number

---

##### `maxRequestsInput`<sup>Optional</sup> <a name="maxRequestsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```typescript
public readonly maxRequestsInput: number;
```

- *Type:* number

---

##### `maxRequestsPerConnectionInput`<sup>Optional</sup> <a name="maxRequestsPerConnectionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```typescript
public readonly maxRequestsPerConnectionInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```typescript
public readonly maxPendingRequests: number;
```

- *Type:* number

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```typescript
public readonly maxRequests: number;
```

- *Type:* number

---

##### `maxRequestsPerConnection`<sup>Required</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```typescript
public readonly maxRequestsPerConnection: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceCircuitBreakers;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

---


### GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference <a name="GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetConnectionPersistenceOnUnhealthyBackends">resetConnectionPersistenceOnUnhealthyBackends</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetEnableStrongAffinity">resetEnableStrongAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetIdleTimeoutSec">resetIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetTrackingMode">resetTrackingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionPersistenceOnUnhealthyBackends` <a name="resetConnectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetConnectionPersistenceOnUnhealthyBackends"></a>

```typescript
public resetConnectionPersistenceOnUnhealthyBackends(): void
```

##### `resetEnableStrongAffinity` <a name="resetEnableStrongAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetEnableStrongAffinity"></a>

```typescript
public resetEnableStrongAffinity(): void
```

##### `resetIdleTimeoutSec` <a name="resetIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetIdleTimeoutSec"></a>

```typescript
public resetIdleTimeoutSec(): void
```

##### `resetTrackingMode` <a name="resetTrackingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetTrackingMode"></a>

```typescript
public resetTrackingMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackendsInput">connectionPersistenceOnUnhealthyBackendsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinityInput">enableStrongAffinityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSecInput">idleTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingModeInput">trackingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends">connectionPersistenceOnUnhealthyBackends</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity">enableStrongAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec">idleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode">trackingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionPersistenceOnUnhealthyBackendsInput`<sup>Optional</sup> <a name="connectionPersistenceOnUnhealthyBackendsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackendsInput"></a>

```typescript
public readonly connectionPersistenceOnUnhealthyBackendsInput: string;
```

- *Type:* string

---

##### `enableStrongAffinityInput`<sup>Optional</sup> <a name="enableStrongAffinityInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinityInput"></a>

```typescript
public readonly enableStrongAffinityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idleTimeoutSecInput`<sup>Optional</sup> <a name="idleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSecInput"></a>

```typescript
public readonly idleTimeoutSecInput: number;
```

- *Type:* number

---

##### `trackingModeInput`<sup>Optional</sup> <a name="trackingModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingModeInput"></a>

```typescript
public readonly trackingModeInput: string;
```

- *Type:* string

---

##### `connectionPersistenceOnUnhealthyBackends`<sup>Required</sup> <a name="connectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends"></a>

```typescript
public readonly connectionPersistenceOnUnhealthyBackends: string;
```

- *Type:* string

---

##### `enableStrongAffinity`<sup>Required</sup> <a name="enableStrongAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity"></a>

```typescript
public readonly enableStrongAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idleTimeoutSec`<sup>Required</sup> <a name="idleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec"></a>

```typescript
public readonly idleTimeoutSec: number;
```

- *Type:* number

---

##### `trackingMode`<sup>Required</sup> <a name="trackingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode"></a>

```typescript
public readonly trackingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceConnectionTrackingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---


### GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```typescript
public putTtl(value: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```typescript
public readonly ttl: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceConsistentHashHttpCookie;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---


### GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---


### GoogleComputeRegionBackendServiceConsistentHashOutputReference <a name="GoogleComputeRegionBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie">putHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie">resetHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName">resetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize">resetMinimumRingSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpCookie` <a name="putHttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```typescript
public putHttpCookie(value: GoogleComputeRegionBackendServiceConsistentHashHttpCookie): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---

##### `resetHttpCookie` <a name="resetHttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```typescript
public resetHttpCookie(): void
```

##### `resetHttpHeaderName` <a name="resetHttpHeaderName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```typescript
public resetHttpHeaderName(): void
```

##### `resetMinimumRingSize` <a name="resetMinimumRingSize" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```typescript
public resetMinimumRingSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput">httpCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">httpHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">minimumRingSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize">minimumRingSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpCookie`<sup>Required</sup> <a name="httpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```typescript
public readonly httpCookie: GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `httpCookieInput`<sup>Optional</sup> <a name="httpCookieInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```typescript
public readonly httpCookieInput: GoogleComputeRegionBackendServiceConsistentHashHttpCookie;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---

##### `httpHeaderNameInput`<sup>Optional</sup> <a name="httpHeaderNameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```typescript
public readonly httpHeaderNameInput: string;
```

- *Type:* string

---

##### `minimumRingSizeInput`<sup>Optional</sup> <a name="minimumRingSizeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```typescript
public readonly minimumRingSizeInput: number;
```

- *Type:* number

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

---

##### `minimumRingSize`<sup>Required</sup> <a name="minimumRingSize" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```typescript
public readonly minimumRingSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceConsistentHash;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

---


### GoogleComputeRegionBackendServiceFailoverPolicyOutputReference <a name="GoogleComputeRegionBackendServiceFailoverPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover">resetDisableConnectionDrainOnFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy">resetDropTrafficIfUnhealthy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio">resetFailoverRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableConnectionDrainOnFailover` <a name="resetDisableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover"></a>

```typescript
public resetDisableConnectionDrainOnFailover(): void
```

##### `resetDropTrafficIfUnhealthy` <a name="resetDropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy"></a>

```typescript
public resetDropTrafficIfUnhealthy(): void
```

##### `resetFailoverRatio` <a name="resetFailoverRatio" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio"></a>

```typescript
public resetFailoverRatio(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput">disableConnectionDrainOnFailoverInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput">dropTrafficIfUnhealthyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput">failoverRatioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover">disableConnectionDrainOnFailover</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy">dropTrafficIfUnhealthy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio">failoverRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableConnectionDrainOnFailoverInput`<sup>Optional</sup> <a name="disableConnectionDrainOnFailoverInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput"></a>

```typescript
public readonly disableConnectionDrainOnFailoverInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dropTrafficIfUnhealthyInput`<sup>Optional</sup> <a name="dropTrafficIfUnhealthyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput"></a>

```typescript
public readonly dropTrafficIfUnhealthyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failoverRatioInput`<sup>Optional</sup> <a name="failoverRatioInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput"></a>

```typescript
public readonly failoverRatioInput: number;
```

- *Type:* number

---

##### `disableConnectionDrainOnFailover`<sup>Required</sup> <a name="disableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover"></a>

```typescript
public readonly disableConnectionDrainOnFailover: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dropTrafficIfUnhealthy`<sup>Required</sup> <a name="dropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy"></a>

```typescript
public readonly dropTrafficIfUnhealthy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failoverRatio`<sup>Required</sup> <a name="failoverRatio" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio"></a>

```typescript
public readonly failoverRatio: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceFailoverPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

---


### GoogleComputeRegionBackendServiceIapOutputReference <a name="GoogleComputeRegionBackendServiceIapOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientId">resetOauth2ClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientSecret">resetOauth2ClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauth2ClientId` <a name="resetOauth2ClientId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientId"></a>

```typescript
public resetOauth2ClientId(): void
```

##### `resetOauth2ClientSecret` <a name="resetOauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientSecret"></a>

```typescript
public resetOauth2ClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">oauth2ClientSecretSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput">oauth2ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput">oauth2ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId">oauth2ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauth2ClientSecretSha256`<sup>Required</sup> <a name="oauth2ClientSecretSha256" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```typescript
public readonly oauth2ClientSecretSha256: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauth2ClientIdInput`<sup>Optional</sup> <a name="oauth2ClientIdInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```typescript
public readonly oauth2ClientIdInput: string;
```

- *Type:* string

---

##### `oauth2ClientSecretInput`<sup>Optional</sup> <a name="oauth2ClientSecretInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```typescript
public readonly oauth2ClientSecretInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```typescript
public readonly oauth2ClientId: string;
```

- *Type:* string

---

##### `oauth2ClientSecret`<sup>Required</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```typescript
public readonly oauth2ClientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceIap;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

---


### GoogleComputeRegionBackendServiceLogConfigOutputReference <a name="GoogleComputeRegionBackendServiceLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```typescript
public resetSampleRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```typescript
public readonly sampleRateInput: number;
```

- *Type:* number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

---


### GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference <a name="GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceOutlierDetectionInterval;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---


### GoogleComputeRegionBackendServiceOutlierDetectionOutputReference <a name="GoogleComputeRegionBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">putBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval">putInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">resetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">resetConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">resetConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">resetEnforcingConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">resetEnforcingConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">resetEnforcingSuccessRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">resetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">resetSuccessRateMinimumHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">resetSuccessRateRequestVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">resetSuccessRateStdevFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseEjectionTime` <a name="putBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```typescript
public putBaseEjectionTime(value: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `putInterval` <a name="putInterval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```typescript
public putInterval(value: GoogleComputeRegionBackendServiceOutlierDetectionInterval): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---

##### `resetBaseEjectionTime` <a name="resetBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```typescript
public resetBaseEjectionTime(): void
```

##### `resetConsecutiveErrors` <a name="resetConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```typescript
public resetConsecutiveErrors(): void
```

##### `resetConsecutiveGatewayFailure` <a name="resetConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```typescript
public resetConsecutiveGatewayFailure(): void
```

##### `resetEnforcingConsecutiveErrors` <a name="resetEnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```typescript
public resetEnforcingConsecutiveErrors(): void
```

##### `resetEnforcingConsecutiveGatewayFailure` <a name="resetEnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```typescript
public resetEnforcingConsecutiveGatewayFailure(): void
```

##### `resetEnforcingSuccessRate` <a name="resetEnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```typescript
public resetEnforcingSuccessRate(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMaxEjectionPercent` <a name="resetMaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```typescript
public resetMaxEjectionPercent(): void
```

##### `resetSuccessRateMinimumHosts` <a name="resetSuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```typescript
public resetSuccessRateMinimumHosts(): void
```

##### `resetSuccessRateRequestVolume` <a name="resetSuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```typescript
public resetSuccessRateRequestVolume(): void
```

##### `resetSuccessRateStdevFactor` <a name="resetSuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```typescript
public resetSuccessRateStdevFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">baseEjectionTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">consecutiveErrorsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">consecutiveGatewayFailureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">enforcingConsecutiveErrorsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">enforcingConsecutiveGatewayFailureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">enforcingSuccessRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput">intervalInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">maxEjectionPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">successRateMinimumHostsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">successRateRequestVolumeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">successRateStdevFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">consecutiveErrors</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseEjectionTime`<sup>Required</sup> <a name="baseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```typescript
public readonly baseEjectionTime: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```typescript
public readonly interval: GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `baseEjectionTimeInput`<sup>Optional</sup> <a name="baseEjectionTimeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```typescript
public readonly baseEjectionTimeInput: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `consecutiveErrorsInput`<sup>Optional</sup> <a name="consecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```typescript
public readonly consecutiveErrorsInput: number;
```

- *Type:* number

---

##### `consecutiveGatewayFailureInput`<sup>Optional</sup> <a name="consecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```typescript
public readonly consecutiveGatewayFailureInput: number;
```

- *Type:* number

---

##### `enforcingConsecutiveErrorsInput`<sup>Optional</sup> <a name="enforcingConsecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```typescript
public readonly enforcingConsecutiveErrorsInput: number;
```

- *Type:* number

---

##### `enforcingConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```typescript
public readonly enforcingConsecutiveGatewayFailureInput: number;
```

- *Type:* number

---

##### `enforcingSuccessRateInput`<sup>Optional</sup> <a name="enforcingSuccessRateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```typescript
public readonly enforcingSuccessRateInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: GoogleComputeRegionBackendServiceOutlierDetectionInterval;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---

##### `maxEjectionPercentInput`<sup>Optional</sup> <a name="maxEjectionPercentInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```typescript
public readonly maxEjectionPercentInput: number;
```

- *Type:* number

---

##### `successRateMinimumHostsInput`<sup>Optional</sup> <a name="successRateMinimumHostsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```typescript
public readonly successRateMinimumHostsInput: number;
```

- *Type:* number

---

##### `successRateRequestVolumeInput`<sup>Optional</sup> <a name="successRateRequestVolumeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```typescript
public readonly successRateRequestVolumeInput: number;
```

- *Type:* number

---

##### `successRateStdevFactorInput`<sup>Optional</sup> <a name="successRateStdevFactorInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```typescript
public readonly successRateStdevFactorInput: number;
```

- *Type:* number

---

##### `consecutiveErrors`<sup>Required</sup> <a name="consecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```typescript
public readonly consecutiveErrors: number;
```

- *Type:* number

---

##### `consecutiveGatewayFailure`<sup>Required</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```typescript
public readonly consecutiveGatewayFailure: number;
```

- *Type:* number

---

##### `enforcingConsecutiveErrors`<sup>Required</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```typescript
public readonly enforcingConsecutiveErrors: number;
```

- *Type:* number

---

##### `enforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```typescript
public readonly enforcingConsecutiveGatewayFailure: number;
```

- *Type:* number

---

##### `enforcingSuccessRate`<sup>Required</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```typescript
public readonly enforcingSuccessRate: number;
```

- *Type:* number

---

##### `maxEjectionPercent`<sup>Required</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```typescript
public readonly maxEjectionPercent: number;
```

- *Type:* number

---

##### `successRateMinimumHosts`<sup>Required</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```typescript
public readonly successRateMinimumHosts: number;
```

- *Type:* number

---

##### `successRateRequestVolume`<sup>Required</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```typescript
public readonly successRateRequestVolume: number;
```

- *Type:* number

---

##### `successRateStdevFactor`<sup>Required</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```typescript
public readonly successRateStdevFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceOutlierDetection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

---


### GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.putTtl"></a>

```typescript
public putTtl(value: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```typescript
public readonly ttl: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceStrongSessionAffinityCookie;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---


### GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---


### GoogleComputeRegionBackendServiceSubsettingOutputReference <a name="GoogleComputeRegionBackendServiceSubsettingOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionBackendServiceSubsetting;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

---


### GoogleComputeRegionBackendServiceTimeoutsOutputReference <a name="GoogleComputeRegionBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionBackendService } from '@cdktf/provider-google-beta'

new googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionBackendServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

---



